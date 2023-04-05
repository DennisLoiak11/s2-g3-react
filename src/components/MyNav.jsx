import Netflix from '../assets/netflix_logo.png'
import LogoNetflix from './LogoNetflix';


function MyNav(){
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary mb-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <LogoNetflix src={Netflix} width={'100px'}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">TV Shows</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Recently Added</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">My List</a>
                        </li>
                    </ul>
                    <div className="d-flex text-white align-items-center justify-content-end">
                        <i className="bi bi-search px-2 text-secondary"></i>
                        <p className="px-2 my-0">KIDS</p>
                        <i className="bi bi-bell-fill px-2 text-secondary"></i>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MyNav;