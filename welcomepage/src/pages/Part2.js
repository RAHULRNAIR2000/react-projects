import React from "react";
import "../App2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function Part2() {
  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand easeIn" href="#">
          <div className="icon-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcuYQ5iU97JGmisYhnzD5Z_uKT8taGRd9umhfOwHQxmdd-n1_J3lKSLEJ1v-cpv5CfSm0&usqp=CAU"
              alt=""
            />
          </div>
          <span className="name">Tarento</span>
        </a>

        <div className="navbar-footer">
          <img
            className="image-documents easeIn"
            src="https://ozcanzaferayan.github.io/financial-crm/img/documents.svg"
            alt="documents"
          />
          <div className="container">
            <a href="#" download className="easeIn">
              Add new employee
            </a>
          </div>
        </div>
      </nav>
      <main>
        <header>
          <section role="search">
            <form action="#" method="get">
              <div className="form-inline">
                <img className="icon search" alt="" />
                <input type="search" placeholder="Search" />
              </div>
            </form>
          </section>

          {/* <section role="application">
            <button className="change-view">
              <img className="icon layout" alt="" />
              Change view
            </button>
            <button className="notification">
              <img className="icon notification" alt="" />
            </button>
            <button className="menu">
              <img className="icon menu" alt="" />
            </button>
          </section> */}
        </header>
        <h1 className="font-weight-bold easeIn">Employee Management</h1>
        <div className="cards fadeIn">
          <section role="credit-card">
            <div className="top">
              <img
                src="https://ozcanzaferayan.github.io/financial-crm/img/mastercard.svg"
                alt=""
              />
              {/* <img
                src="https://ozcanzaferayan.github.io/financial-crm/img/apple_pay.svg"
                className="apple_pay"
                alt=""
              /> */}
            </div>
            <div className="ccNumber">
              <span>Rahul R Nair</span>
            </div>
            <div className="ccBottom">
              <div className="ccValidThru">
                <label>IBU</label>
                <span>Digital</span>
              </div>
              <div className="ccCardHolder">
                <span>
                  <div class="wrapper11">
                    <ul className="effect_1">
                      <li>
                        <a href="#">
                          <i className="fa fa-pencil-square-o"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-trash-o"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
            </div>
          </section>
          <section role="credit-card">
            <div className="top">
              <img
                src="https://ozcanzaferayan.github.io/financial-crm/img/mastercard.svg"
                alt=""
              />
              {/* <img
                src="https://ozcanzaferayan.github.io/financial-crm/img/apple_pay.svg"
                className="apple_pay"
                alt=""
              /> */}
            </div>
            <div className="ccNumber">
              <span>Rahul R Nair</span>
            </div>
            <div className="ccBottom">
              <div className="ccValidThru">
                <label>IBU</label>
                <span>Digital</span>
              </div>
              <div className="ccCardHolder">
                <span>
                  <div class="wrapper11">
                    <ul className="effect_1">
                      <li>
                        <a href="#">
                          <i className="fa fa-pencil-square-o"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-trash-o"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
            </div>
          </section>
          <section role="credit-card">
            <div className="top">
              <img
                src="https://ozcanzaferayan.github.io/financial-crm/img/mastercard.svg"
                alt=""
              />
              {/* <img
                src="https://ozcanzaferayan.github.io/financial-crm/img/apple_pay.svg"
                className="apple_pay"
                alt=""
              /> */}
            </div>
            <div className="ccNumber">
              <span>Rahul R Nair</span>
            </div>
            <div className="ccBottom">
              <div className="ccValidThru">
                <label>IBU</label>
                <span>Digital</span>
              </div>
              <div className="ccCardHolder">
                <span>
                  <div class="wrapper11">
                    <ul className="effect_1">
                      <li>
                        <a href="#">
                          <i className="fa fa-pencil-square-o"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-trash-o"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
            </div>
          </section>
          <section role="credit-card">
            <div className="top">
              <img
                src="https://ozcanzaferayan.github.io/financial-crm/img/mastercard.svg"
                alt=""
              />
              {/* <img
                src="https://ozcanzaferayan.github.io/financial-crm/img/apple_pay.svg"
                className="apple_pay"
                alt=""
              /> */}
            </div>
            <div className="ccNumber">
              <span>Rahul R Nair</span>
            </div>
            <div className="ccBottom">
              <div className="ccValidThru">
                <label>IBU</label>
                <span>Digital</span>
              </div>
              <div className="ccCardHolder">
                <span>
                  <div class="wrapper11">
                    <ul className="effect_1">
                      <li>
                        <a href="#">
                          <i className="fa fa-pencil-square-o"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-trash-o"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
            </div>
          </section>
          <section role="credit-card">
            <div className="top">
              <img
                src="https://ozcanzaferayan.github.io/financial-crm/img/mastercard.svg"
                alt=""
              />
              {/* <img
                src="https://ozcanzaferayan.github.io/financial-crm/img/apple_pay.svg"
                className="apple_pay"
                alt=""
              /> */}
            </div>
            <div className="ccNumber">
              <span>Rahul R Nair</span>
            </div>
            <div className="ccBottom">
              <div className="ccValidThru">
                <label>IBU</label>
                <span>Digital</span>
              </div>
              <div className="ccCardHolder">
                <span>
                  <div class="wrapper11">
                    <ul className="effect_1">
                      <li>
                        <a href="#">
                          <i className="fa fa-pencil-square-o"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-trash-o"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
            </div>
          </section>
          

          {/* <section role="chart" className="exchange-rates">
            <h3 className="title">Exchange rates</h3>
          <div className="cards">
             <section role="credit-card">
            <div className="top">
              <img
                src="https://ozcanzaferayan.github.io/financial-crm/img/mastercard.svg"
                alt=""
              />
              <img
                src="https://ozcanzaferayan.github.io/financial-crm/img/apple_pay.svg"
                className="apple_pay"
                alt=""
              />
            </div>
            <div className="ccNumber">
              <span>˙˙˙˙ ˙˙˙˙ ˙˙˙˙ 5610</span>
            </div>
            <div className="ccBottom">
              <div className="ccValidThru">
                <label>VALID THRU</label>
                <span>05/21</span>
              </div>
              <div className="ccCardHolder">
                <label>CARD HOLDER</label>
                <span>Robert</span>
              </div>
            </div>
          </section>
           <section role="credit-card">
            <div className="top">
              <img
                src="https://ozcanzaferayan.github.io/financial-crm/img/mastercard.svg"
                alt=""
              />
              <img
                src="https://ozcanzaferayan.github.io/financial-crm/img/apple_pay.svg"
                className="apple_pay"
                alt=""
              />
            </div>
            <div className="ccNumber">
              <span>˙˙˙˙ ˙˙˙˙ ˙˙˙˙ 5610</span>
            </div>
            <div className="ccBottom">
              <div className="ccValidThru">
                <label>VALID THRU</label>
                <span>05/21</span>
              </div>
              <div className="ccCardHolder">
                <label>CARD HOLDER</label>
                <span>Robert</span>
              </div>
            </div>
          </section>

          </div>
            
          </section>
          <section role="chart" className="last-costs">
            <h3 className="title">Last Costs</h3>
            <canvas id="last_costs"></canvas>
          </section>
          <section role="chart" className="efficiency">
            <h3 className="title">Efficiency</h3>
            <canvas id="efficiency"></canvas>
          </section> */}
        </div>
      </main>
    </div>
  );
}

export default Part2;
