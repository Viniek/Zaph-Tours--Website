import news from "../../assets/news.svg"
import formimg from "../../assets/form.jpg"
import "./News.css"
function News() {
  return (
    <div>
        <section className="newheading">
            <h2>Subcsribe to our newsletter</h2>
        </section>

        <div className="subscribe">
        {/* <section>
            <img src={news} alt="Join us" />
        </section> */}

        <form className="form">
        <div className="formitem">
        <label htmlFor="name">Full Name</label>
        <input type="text" className="name"  placeholder="Full Name"/>
        </div>

        {/* Formitem */}
        <div className="formitem">
        <label htmlFor="email">Email</label>
        <input type="email" className="email" placeholder="Your email" />
        </div>

        <div className="formitem">
        <label htmlFor="phone">Phone</label>
        <input type="number" className="phone" placeholder="Your phone number" />
        </div>

        <div className="formitem">
        <label htmlFor="location">Location</label>
        <input type="text" className="location" placeholder="Your location" />
        </div>

        <button type="button">Submit</button>
        </form>
        </div>


    </div>
  )
}

export default News
