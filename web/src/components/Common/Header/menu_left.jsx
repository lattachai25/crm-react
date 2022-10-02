import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <div
        className="main-menu menu-fixed menu-light menu-accordion menu-shadow"
        data-scroll-to-active="true"
      >
        <div className="navbar-header">
          <ul className="nav navbar-nav flex-row">
            <li className="nav-item mr-auto">
              <a className="navbar-brand" href="/">
                <div className="brand-logo" />
                <h2 className="brand-text mb-0">WorldPaint</h2>
              </a>
            </li>
          </ul>
        </div>
        <div className="shadow-bottom" />
        <div className="main-menu-content">
          <ul
            className="navigation navigation-main"
            id="main-menu-navigation"
            data-menu="menu-navigation"
            data-icon-style
          >
            <li className=" nav-item">
              <a href="#">
                <i className="bx bx-wrench" />
                <span className="menu-title" data-i18n="Invoice">
                  Master &amp; Setting
                </span>
              </a>
              <ul className="menu-content">
                <li className=" nav-item">
                  <a href="#">
                    <i className="bx bx-wrench" />
                    <span className="menu-title" data-i18n="Invoice">
                      General Master Data
                    </span>
                  </a>
                  <ul className="menu-content">
                    {/* <li> <a class="btn btn-warning" href="{{ route('export') }}">Export User Data</a> </li> */}
                    <li className="{">
                      <Link to="mdept">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="DEPT (DEPT)">
                          DEPT (DEPT)
                        </span>
                      </Link>
                    </li>
                    <li className="">
                      <Link to="mzone">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="DEPT (DEPT)">
                          ZONE
                        </span>
                      </Link>
                    </li>
                    <li className="">
                      <Link to="mts">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="TS (T/S)">
                          TS (T/S)
                        </span>
                      </Link>
                    </li>
                    <li className="">
                      <Link to="mdps">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="DPS (DPS)">
                          DPS (DPS)
                        </span>
                      </Link>
                    </li>
                    <li className="">
                      <Link to="mprodtype">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="PROD_TYPE (Product Type)"
                        >
                          PROD_TYPE (Product Type)
                        </span>
                      </Link>
                    </li>
                    <li className="">
                      <Link to="mpromotion">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="PROMOTION (PROMOTION)"
                        >
                          PROMOTION (PROMOTION)
                        </span>
                      </Link>
                    </li>
                    <li className="">
                      <Link to="macc">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="ACC (Account)">
                          ACC (Account)
                        </span>
                      </Link>
                    </li>
                    <li className="">
                      <Link to="mmatgroup">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="MAT_GROUP (Material Group)"
                        >
                          MAT_GROUP (Material Group)
                        </span>
                      </Link>
                    </li>
                    <li className="">
                      <Link to="mprodgroup">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="PROD_GROUP (ประเภทสี)"
                        >
                          PROD_GROUP (ประเภทสี)
                        </span>
                      </Link>
                    </li>
                    <li className="">
                      <Link to="mvat">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="VAT (VAT)">
                          VAT (VAT)
                        </span>
                      </Link>
                    </li>
                    <li className="">
                      <Link to="mcntype">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="CN_TYPE (CN Type)"
                        >
                          CN_TYPE (CN Type)
                        </span>
                      </Link>
                    </li>
                    <li className="">
                      <Link to="mcgterm">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="CG_TERM (เครดิตการจ่าย CG)"
                        >
                          CG_TERM (เครดิตการจ่าย CG)
                        </span>
                      </Link>
                    </li>
                    <li className="">
                      <Link to="mprodsubtype">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="PROD_SUB_TYPE (Product sub type)"
                        >
                          PROD_SUB_TYPE (Product sub type)
                        </span>
                      </Link>
                    </li>
                    <li className="">
                      <Link to="mpounit">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="PO_UNIT (Unit)">
                          PO_UNIT (Unit)
                        </span>
                      </Link>
                    </li>
                    <li className="">
                      <Link to="mdivision">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="DIVISION (DIVISION)"
                        >
                          DIVISION (DIVISION)
                        </span>
                      </Link>
                    </li>
                    <li className="">
                      <Link to="munit">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="PROD_UNIT (Unit)"
                        >
                          PROD_UNIT (Unit)
                        </span>
                      </Link>
                    </li>
                    <li className="">
                      <Link to="mpodsize">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="PROD_SIZE (Product Size)"
                        >
                          PROD_SIZE (Product Size)
                        </span>
                      </Link>
                    </li>
                    <li className="">
                      <Link to="mcgamount">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="CG_AMOUNT">
                          CG_AMOUNT
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="">
                  <Link to="mcustomer">
                    <i className="bx bx-right-arrow-alt" />
                    <span
                      className="menu-item"
                      data-i18n="Customer Master Info."
                    >
                      Customer Master Info.
                    </span>
                  </Link>
                </li>
                <li className="">
                  <Link to="mvendor">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Vendor / Supplier">
                      Vendor / Supplier
                    </span>
                  </Link>
                </li>
                <li className="{{ (request()->segment(1) == 'memployee') ? 'active' : '' }}">
                  <Link to="memployee">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Employee / Sale">
                      Employee / Sale
                    </span>
                  </Link>
                </li>
                <li className="">
                  <Link to="maccount_info">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="account info">
                      Account info
                    </span>
                  </Link>
                </li>
                {/* <li class="{{ (request()->segment(1) == 'mexpense') ? 'active' : '' }}"><a href="{{ route('mexpense.index') }}"><i class="bx bx-right-arrow-alt"></i><span class="menu-item" data-i18n="Expense Info.">Expense Info.</span></a>
      </li> */}
                <li className="">
                  <Link to="mbank_info">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Bank Info.">
                      Bank Info.
                    </span>
                  </Link>
                </li>
                <li className="">
                  <Link to="mitemcost_info">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Item & Cost Info.">
                      Item &amp; Cost Info.
                    </span>
                  </Link>
                </li>
                <li className="">
                  <a href="{{ route('mastersize.index') }}">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Master Size.">
                      Master Size.
                    </span>
                  </a>
                </li>
                <li className="">
                  <Link to="menamel_master">
                    <i className="bx bx-right-arrow-alt" />
                    <span
                      className="menu-item"
                      data-i18n="Enamel Master Setup."
                    >
                      Enamel Master Setup.
                    </span>
                  </Link>
                  <ul className="menu-content">
                    <li className="">
                      <Link to="menamel_master">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="Enamel Master Setup."
                        >
                          Add Master Enamel
                        </span>
                      </Link>
                    </li>
                    <li className="">
                      <Link to="menamel_sub_master">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="Add Sub Enamel Master"
                        >
                          Add Sub Enamel Master
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
