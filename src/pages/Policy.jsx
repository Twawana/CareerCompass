import './Policy.css'

function Policy() {
  return (
    <>
      <header className="policy-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: June 22, 2025</p>
        </div>
      </header>

      <div className="container">
        <div className="policy-section">
          <h2>Introduction</h2>
          <p>Career Compass we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>
          <p>By accessing or using our service, you agree to the collection and use of information in accordance with this policy.</p>
        </div>

        <div className="policy-section">
          <h2>Information We Collect</h2>

          <h3>Personal Information</h3>
          <p>We may collect personally identifiable information that you voluntarily provide to us, including:</p>
          <ul>
            <li>Name and contact information (email address, phone number)</li>
            <li>Demographic information (age, gender, location)</li>
            <li>Educational background and work history</li>
            <li>Career interests and assessment results</li>
            <li>Payment information for premium services</li>
          </ul>

          <h3>Non-Personal Information</h3>
          <p>We automatically collect certain information when you visit our website, including:</p>
          <ul>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on pages</li>
            <li>IP address and approximate location</li>
            <li>Device information (type, operating system)</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect for various purposes:</p>
          <ul>
            <li>To provide and maintain our career assessment services</li>
            <li>To personalize your experience and career recommendations</li>
            <li>To improve our website and services</li>
            <li>To communicate with you about your account or our services</li>
            <li>To process payments for premium features</li>
            <li>To comply with legal obligations</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>Sharing of Information</h2>
          <p>We do not sell your personal information. We may share information in these circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> With third parties who perform services on our behalf (e.g., hosting, analytics)</li>
            <li><strong>Educational Partners:</strong> With educational institutions when you request information about their programs</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
          <ul>
            <li>Encryption of sensitive data</li>
            <li>Secure servers and firewalls</li>
            <li>Regular security assessments</li>
            <li>Limited access to personal information</li>
          </ul>
          <p>However, no internet transmission or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
        </div>

        <div className="policy-section">
          <h2>Your Rights and Choices</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Correction:</strong> Update or correct inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
            <li><strong>Opt-Out:</strong> Object to certain processing activities</li>
            <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
          </ul>
          <p>To exercise these rights, please contact us using the information below.</p>
        </div>

        <div className="policy-section">
          <h2>Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar tracking technologies to:</p>
          <ul>
            <li>Remember your preferences</li>
            <li>Analyze website traffic</li>
            <li>Improve user experience</li>
          </ul>
          <p>You can control cookies through your browser settings, but disabling cookies may affect website functionality.</p>
        </div>

        <div className="policy-section">
          <h2>Children's Privacy</h2>
          <p>Our services are directed to everyone. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete such information.</p>
        </div>

        <div className="policy-section">
          <h2>Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on our website and updating the "Last Updated" date.</p>
          <p>Your continued use of our services after changes constitutes acceptance of the updated policy.</p>
        </div>

        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy or your personal information:</p>
          <p><strong>Email:</strong> privacy@careercompass.com</p>
          <p><strong>Mail:</strong> Career Compass, 123 Privacy Lane, Namibia, P.O.BOX 2334 Oshakati</p>
        </div>
      </div>
    </>
  )
}

export default Policy
