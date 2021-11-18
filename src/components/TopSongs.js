import React from 'react';

function TopSongs(props) {  
    return(
        <section className="sidebar d-none d-lg-block border-right" id='top-songs'>
                <h1 className="text-center mt-5 mb-4 font-weight-bold">Top 10 Weekly Songs</h1>

                <ol className="list-group list-group-numbered list-group-flush">
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                        <a className="ms-2 me-auto" href="https://open.spotify.com/track/0gplL1WMoJ6iYaPgMCL0gX"
                            _blank="target">
                            <div className="fw-bold">Easy On Me by Adele</div>
                            <em>Adele</em>
                        </a>
                    </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                        <a className="ms-2 me-auto" href="https://open.spotify.com/track/5PjdY0CKGZdEuoNab3yDmX"
                            _blank="target">
                            <div className="fw-bold">STAY (with Justin Bieber)</div>
                            <em>The Kid LAROI</em>
                        </a>
                    </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                        <a className="ms-2 me-auto" href="https://open.spotify.com/track/5Z9KJZvQzH6PFmb8SNkxuk"
                            _blank="target">
                            <div className="fw-bold">INDUSTRY BABY (feat. Jack Harlow)</div>
                            <em>Lil Nas X</em>
                        </a>
                        <span className="badge bg-primary rounded-pill ml-2">new</span>
                    </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                        <a className="ms-2 me-auto" href="https://open.spotify.com/track/02MWAaffLxlfxAUY7c5dvx"
                            _blank="target">
                            <div className="fw-bold">Heat Waves </div>
                            <em>Glass Animals</em>
                        </a>
                    </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                        <a className="ms-2 me-auto" href="https://open.spotify.com/track/7hU3IHwjX150XLoTVmjD0q"
                            _blank="target">
                            <div className="fw-bold">MONEY</div>
                            <em>LISA</em>
                        </a>
                    </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                        <a className="ms-2 me-auto" href="https://open.spotify.com/track/7rglLriMNBPAyuJOMGwi39"
                            _blank="target">
                            <div className="fw-bold">Cold Heart - PNAU Remix </div>
                            <em>Elton John, Dua Lipa</em>
                        </a>
                    </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                        <a className="ms-2 me-auto" href="https://open.spotify.com/track/2gpWyfu7eZ01zzncHpxOtA"
                            _blank="target">
                            <div className="fw-bold">Moth To A Flame (with The Weeknd)</div>
                            <em>Swedish House Mafia</em>
                        </a>
                        <span className="badge bg-primary rounded-pill ml-2">new</span>
                    </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                        <a className="ms-2 me-auto" href="https://open.spotify.com/track/75MNhvTCCKsST3YqqUiU9r"
                            _blank="target">
                            <div className="fw-bold">Shivers</div>
                            <em>Ed Sheeran</em>
                        </a>
                    </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                        <a className="ms-2 me-auto" href="https://open.spotify.com/track/46HNZY1i7O6jwTA7Slo2PI"
                            _blank="target">
                            <div className="fw-bold">My Universe</div>
                            <em>Coldplay, BTS</em>
                        </a>
                    </li>
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                        <a className="ms-2 me-auto" href="https://open.spotify.com/track/2B4GHvToeLTOBB4QLzW3Ni"
                            _blank="target">
                            <div className="fw-bold">Pepas</div>
                            <em>Farruko</em>
                        </a>
                    </li>
                </ol>
        </section>
    );
}
export default TopSongs;