function MyFooter() {
    return (
        <>
            <footer className="bg-dark p-3">

                <div className="container w-50 px-0">
                    <div className="row text-light my-4">
                        <div className="col-12 col-md-6 col-lg-3">
                            <p>Audio and Subtitles</p>
                            <p>Media Center</p>
                            <p>Privacy</p>
                            <p>Contact US</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <p>Audio Description</p>
                            <p>Investor Relations</p>
                            <p>Legal Relations</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <p>Help Center</p>
                            <p>Jobs</p>
                            <p>Cookie Preferences</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <p>Gift Cards</p>
                            <p>Terms of Use</p>
                            <p>Corporate Informations</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-outline-dark">Service Code</button>

                        <a href="profile.html">
                            <button type="button" className="btn btn-outline-dark">Edit Profile</button>
                        </a>
                        <a href="account.html">
                            <button type="button" className="btn btn-outline-dark">Account</button>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default MyFooter;