import './Partners.css'
import { 
  SiSalesforce, 
  SiNow, 
  SiSap, 
  SiAmazonwebservices, 
  SiGooglecloud, 
  SiOracle 
} from 'react-icons/si'

// Microsoft icon as SVG (not available in Simple Icons)
const SiMicrosoft = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.628h11.377V24H0zm12.623 12.372H24V12.628H12.623z"/>
  </svg>
)

const partners = [
  { name: 'Salesforce', Icon: SiSalesforce },
  { name: 'ServiceNow', Icon: SiNow },
  { name: 'SAP', Icon: SiSap },
  { name: 'Microsoft Dynamics', Icon: SiMicrosoft },
  { name: 'AWS', Icon: SiAmazonwebservices },
  { name: 'Google Cloud', Icon: SiGooglecloud },
  { name: 'Oracle', Icon: SiOracle },
]

function Partners() {
  return (
    <section className="partners section" id="partners">
      <div className="container">
        <span className="partners__label">Enterprise Platforms We Integrate With</span>
      </div>
      {/* Shared gradient definition for all icons */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <linearGradient id="partners-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7e57c2" />
            <stop offset="25%" stopColor="#9575cd" />
            <stop offset="50%" stopColor="#7986cb" />
            <stop offset="75%" stopColor="#5c6bc0" />
            <stop offset="100%" stopColor="#4a2040" />
          </linearGradient>
        </defs>
      </svg>
      <div className="partners__track">
        <div className="partners__scroll">
          {[...partners, ...partners].map((partner, i) => {
            const IconComponent = partner.Icon
            return (
              <span key={i} className="partners__item">
                <span className="partners__icon-wrapper">
                  <IconComponent className="partners__icon" style={{ fill: 'url(#partners-gradient)' }} />
                </span>
                {partner.name}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Partners
