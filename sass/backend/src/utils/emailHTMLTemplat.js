const emailHtmlTemplate = (name, otp) => `
  <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
      <div style="background-color: #4f46e5; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">Schoolify LMS</h1>
      </div>
      <div style="padding: 30px;">
        <h2>Hello ${name || "User"},</h2>
        <p style="font-size: 16px; color: #333;">
          Thank you for registering. Use the following One-Time Password (OTP) to verify your email:
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <span style="font-size: 30px; letter-spacing: 5px; font-weight: bold; background: #e0e7ff; padding: 10px 20px; border-radius: 5px; display: inline-block;">
            ${otp}
          </span>
        </div>
        <p style="font-size: 14px; color: #555;">This OTP is valid for only 10 minutes.</p>
        <p style="font-size: 14px; color: #555;">If you did not request this, please ignore this email.</p>
        <br/>
        <p style="font-size: 14px; color: #555;">Best regards,<br/>The Schoolify Team</p>
      </div>
    </div>
  </div>
`;

export default emailHtmlTemplate