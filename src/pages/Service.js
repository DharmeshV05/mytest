 import '../CSS/Service.css'
 function Service () {
    return (

      <section>
        <h3 className='service'>Our Services</h3>
        <p className="section-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="services-grid">
          <div className="service service1">
            <i className="ti-bar-chart" />
            <h4>Wealth Management</h4>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href="/" className="cta ser">Read More <span className="ti-angle-right" /></a>
          </div>
          <div className="service service2">
            <i className="ti-light-bulb" />
            <h4>Financial Planning</h4>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href="/" className="cta ser">Read More <span className="ti-angle-right" /></a>
          </div>
          <div className="service service3">
            <i className="ti-money" />
            <h4>Investment Banking</h4>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href="/" className="cta ser">Read more <span className="ti-angle-right" /></a>
          </div>
        </div>
      </section>
    );
  }

  export default Service;