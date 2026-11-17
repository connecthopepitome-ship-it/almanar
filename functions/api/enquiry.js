/**
 * Cloudflare Pages Function: /api/enquiry
 * Handles project enquiries with server-side validation, spam protection,
 * and optional notification dispatch via Resend / Webhook.
 */

export async function onRequestPost({ request, env }) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let data = {};

    if (contentType.includes('application/json')) {
      data = await request.json();
    } else if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData();
      data = {
        fullName: formData.get('fullName'),
        companyName: formData.get('companyName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        location: formData.get('location'),
        projectDescription: formData.get('projectDescription'),
        honeypot: formData.get('website_check'), // Honeypot
      };
    } else {
      return new Response(JSON.stringify({
        success: false,
        error: 'Unsupported content type'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 1. Spam detection: honeypot field must be empty
    if (data.honeypot) {
      // Silently discard spam bots with 200 OK
      return new Response(JSON.stringify({
        success: true,
        reference: 'AMT-SPAM-PREVENTED',
        message: 'Your enquiry has been received.'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. Server-side validation
    const fullName = (data.fullName || '').toString().trim();
    const email = (data.email || '').toString().trim().toLowerCase();
    const phone = (data.phone || '').toString().trim();
    const service = (data.service || '').toString().trim();
    const location = (data.location || '').toString().trim();
    const projectDescription = (data.projectDescription || '').toString().trim();
    const companyName = (data.companyName || '').toString().trim();

    if (!fullName || fullName.length < 2) {
      return new Response(JSON.stringify({ success: false, error: 'Full name is required (at least 2 characters).' }), {
        status: 422,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return new Response(JSON.stringify({ success: false, error: 'Please enter a valid business email address.' }), {
        status: 422,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!phone || phone.length < 7) {
      return new Response(JSON.stringify({ success: false, error: 'Please enter a valid phone number.' }), {
        status: 422,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!projectDescription || projectDescription.length < 10) {
      return new Response(JSON.stringify({ success: false, error: 'Please provide brief details of your project scope (minimum 10 characters).' }), {
        status: 422,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Generate unique inquiry reference code
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const reference = `AMT-${dateStr}-${randomSuffix}`;

    // 3. Optional Email Dispatch via Resend or Webhook if configured in Cloudflare environment
    if (env && env.RESEND_API_KEY) {
      const recipientEmail = env.NOTIFICATION_EMAIL || 'info@almanartech.com';
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'Al Manar Tech Web <no-reply@almanartech.ae>',
            to: [recipientEmail],
            reply_to: email,
            subject: `[New Website Enquiry] ${reference} - ${service || 'General MEP'} - ${fullName}`,
            html: `
              <h2>New Project Enquiry — Al Manar Tech</h2>
              <p><strong>Reference:</strong> ${reference}</p>
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>Company:</strong> ${companyName || 'Not specified'}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Service Division:</strong> ${service || 'Not specified'}</p>
              <p><strong>Project Location:</strong> ${location || 'Abu Dhabi / UAE'}</p>
              <hr />
              <h3>Project Scope:</h3>
              <p>${projectDescription.replace(/\n/g, '<br/>')}</p>
            `
          })
        });
      } catch (err) {
        console.error('Email notification dispatch error:', err);
      }
    }

    return new Response(JSON.stringify({
      success: true,
      reference: reference,
      message: 'Thank you. Your project enquiry has been registered with Al Manar Tech engineering desk. Our team will review your specifications and contact you shortly.'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    });

  } catch (err) {
    return new Response(JSON.stringify({
      success: false,
      error: 'An internal server error occurred while processing your enquiry. Please contact us directly at 02-5829700 or info@almanartech.com.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

