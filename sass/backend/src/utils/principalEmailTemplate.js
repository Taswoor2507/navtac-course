const principalWelcomeEmailTemplate = (name, schoolName, password) => `
  <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
      <div style="background-color: #4f46e5; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">Schoolify LMS</h1>
      </div>
      <div style="padding: 30px;">
        <h2>Congratulations ${name || "User"},</h2>
        <p style="font-size: 16px; color: #333;">
          You have been selected as the <strong>Principal</strong> of <strong>${schoolName}</strong>! 🎉
        </p>
        <p style="font-size: 16px; color: #333;">
          Here is your temporary login password:
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <span style="font-size: 20px; font-weight: bold; background: #e0e7ff; padding: 10px 20px; border-radius: 5px; display: inline-block;">
            ${password}
          </span>
        </div>
        <p style="font-size: 14px; color: #555;">🔒 Please verify your account first to activate your access.</p>
        <p style="font-size: 14px; color: #555;">✅ After login, make sure to <strong>change your password</strong> to secure your account.</p>
        <br/>
        <p style="font-size: 14px; color: #555;">If you did not expect this email, please contact support or ignore it.</p>
        <br/>
        <p style="font-size: 14px; color: #555;">Best regards,<br/>The Schoolify Team</p>
      </div>
    </div>
  </div>
`;

export default principalWelcomeEmailTemplate;
