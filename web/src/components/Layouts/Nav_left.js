import React from "react";

import About from "../Admin/About";

import { Link } from "react-router-dom";

function Nav_left() {
  return (
    <nav>
      <div
        className="main-menu menu-fixed menu-light menu-accordion menu-shadow"
        data-scroll-to-active="true"
      >
        <div className="navbar-header">
          <ul className="nav navbar-nav flex-row">
            <li className="nav-item mr-auto">
              <a className="navbar-brand" to="/">
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
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="DEPT (DEPT)">
                          DEPT (DEPT)
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="DEPT (DEPT)">
                          ZONE
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="TS (T/S)">
                          TS (T/S)
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="DPS (DPS)">
                          DPS (DPS)
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="PROD_TYPE (Product Type)"
                        >
                          PROD_TYPE (Product Type)
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="PROMOTION (PROMOTION)"
                        >
                          PROMOTION (PROMOTION)
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="ACC (Account)">
                          ACC (Account)
                        </span>
                      </Link>
                    </li>
                    <li className="{{ (request()->segment(1) == 'mmatgroup') ? 'active' : '' }}">
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="MAT_GROUP (Material Group)"
                        >
                          MAT_GROUP (Material Group)
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="PROD_GROUP (ประเภทสี)"
                        >
                          PROD_GROUP (ประเภทสี)
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="VAT (VAT)">
                          VAT (VAT)
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="CN_TYPE (CN Type)"
                        >
                          CN_TYPE (CN Type)
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="CG_TERM (เครดิตการจ่าย CG)"
                        >
                          CG_TERM (เครดิตการจ่าย CG)
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="PROD_SUB_TYPE (Product sub type)"
                        >
                          PROD_SUB_TYPE (Product sub type)
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="PO_UNIT (Unit)">
                          PO_UNIT (Unit)
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="DIVISION (DIVISION)"
                        >
                          DIVISION (DIVISION)
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="PROD_UNIT (Unit)"
                        >
                          PROD_UNIT (Unit)
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="PROD_SIZE (Product Size)"
                        >
                          PROD_SIZE (Product Size)
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="CG_AMOUNT">
                          CG_AMOUNT
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span
                      className="menu-item"
                      data-i18n="Customer Master Info."
                    >
                      Customer Master Info.
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Vendor / Supplier">
                      Vendor / Supplier
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Employee / Sale">
                      Employee / Sale
                    </span>
                  </Link>
                </li>
                <li className="{{ (request()->segment(1) == 'maccount_info') ? 'active' : '' }}">
                  <a href="{{ route('maccount_info.index') }}">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="account info">
                      Account info
                    </span>
                  </a>
                </li>
                {/* <li class="{{ (request()->segment(1) == 'mexpense') ? 'active' : '' }}"><a href="{{ route('mexpense.index') }}"><i class="bx bx-right-arrow-alt"></i><span class="menu-item" data-i18n="Expense Info.">Expense Info.</span></a>
      </li> */}
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Bank Info.">
                      Bank Info.
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Item & Cost Info.">
                      Item &amp; Cost Info.
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Master Size.">
                      Master Size.
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span
                      className="menu-item"
                      data-i18n="Enamel Master Setup."
                    >
                      Enamel Master Setup.
                    </span>
                  </Link>
                  <ul className="menu-content">
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="Enamel Master Setup."
                        >
                          Add Master Enamel
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
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
            <li className=" nav-item">
              <a href="#">
                <i className="bx bx-grid-alt" />
                <span className="menu-title" data-i18n="Content">
                  Production
                </span>
              </a>
              <ul className="menu-content">
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span
                      className="menu-item"
                      data-i18n="Formular (for Prod.)"
                    >
                      Formular (for Prod.)
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span
                      className="menu-item"
                      data-i18n="Production Work Sheet"
                    >
                      Production Work Sheet
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Production Cost">
                      Production Cost
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Browse Product Cost">
                      Browse Product Cost
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Production Plan">
                      Production Plan
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Product">
                      Product
                    </span>
                  </Link>
                </li>
                {/* SUB MENU */}
                <li className=" nav-item">
                  <a href="#">
                    <i className="bx bx-bulb" />
                    <span
                      className="menu-title"
                      data-i18n="[Daily] Stock Report"
                    >
                      [Daily] Stock Report
                    </span>
                  </a>
                  <ul className="menu-content">
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="Item usage summary"
                        >
                          Item usage summary
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="Stock Card">
                          Stock Card
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="Daily Bill">
                          Daily Bill
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="Item List">
                          Item List
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="Vendor List">
                          Vendor List
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="Product Cost">
                          Product Cost
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* END SUB MENU */}
              </ul>
            </li>
            <li className=" nav-item">
              <a href="#">
                <i className="bx bx-grid-alt" />
                <span className="menu-title" data-i18n="Content">
                  Production Stock
                </span>
              </a>
              <ul className="menu-content">
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span
                      className="menu-item"
                      data-i18n="Order [PURCHASE ORDER]"
                    >
                      Order [PURCHASE ORDER]
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Item Receive (Vat)">
                      Item Receive (Vat)
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Credit Note (Vat)">
                      Credit Note (Vat)
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span
                      className="menu-item"
                      data-i18n="Receive Note (No Vat)"
                    >
                      Receive Note (No Vat)
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span
                      className="menu-item"
                      data-i18n="Credit Note (No Vat)"
                    >
                      Credit Note (No Vat)
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Adjust Qty">
                      Adjust Qty
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Item Sale/Withdraw">
                      Item Sale / Withdraw
                    </span>
                  </Link>
                </li>
                {/* SUB MENU */}
                <li className=" nav-item">
                  <a href="#">
                    <i className="bx bx-bulb" />
                    <span className="menu-title" data-i18n="PO Report">
                      PO Report
                    </span>
                  </a>
                  <ul className="menu-content">
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="PO History">
                          PO History
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* END SUB MENU */}
              </ul>
            </li>
            <li className=" nav-item">
              <a href="#">
                <i className="bx bx-briefcase" />
                <span className="menu-title" data-i18n="Sale">
                  Sale
                </span>
              </a>
              <ul className="menu-content">
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Invoice">
                      Invoice
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Dlv. Note">
                      Dlv. Note
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Credit Note">
                      Credit Note
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Other Charge">
                      Other Charge
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Deposit">
                      Deposit
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Withdraw">
                      Withdraw
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Exchange">
                      Exchange
                    </span>
                  </Link>
                </li>
                {/* SUB MENU */}
                <li className=" nav-item">
                  <a href="#">
                    <i className="bx bx-bulb" />
                    <span className="menu-title" data-i18n="Report Sale">
                      Report Sale
                    </span>
                  </a>
                  <ul className="menu-content">
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="Daily Sale">
                          Daily Sale
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="Daily Deposit">
                          Daily Deposit
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="Daily Withdraw">
                          Daily Withdraw
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="Daily Exchange">
                          Daily Exchange
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="Daily Other Charge"
                        >
                          Daily Other Charge
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="Daily Credit Note"
                        >
                          Daily Credit Note
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="Daily Sale Amount"
                        >
                          Daily Sale Amount
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="Search Inv. By Item"
                        >
                          Search Inv. By Item
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="Deposit Balance">
                          Deposit Balance
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="Deposit List">
                          Deposit List
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="Cust. Incentive">
                          Cust. Incentive
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="สรุปบัญชีลูกหนี้(2)"
                        >
                          สรุปบัญชีลูกหนี้(2)
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="Customer Amount">
                          Customer Amount
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="Customer Amount (by Customer)"
                        >
                          Customer Amount (by Customer)
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="Deposit Analysis"
                        >
                          Deposit Analysis
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="Sales by Product"
                        >
                          Sales by Product
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="Sales by Product (by Dept/Zone)"
                        >
                          Sales by Product (by Dept/Zone)
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* END SUB MENU */}
              </ul>
            </li>
            <li className=" nav-item">
              <a href="#">
                <i className="bx bx-briefcase-alt-2" />
                <span className="menu-title" data-i18n="Sale Stock">
                  Sale Stock
                </span>
              </a>
              <ul className="menu-content">
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span
                      className="menu-item"
                      data-i18n="Product Stock Adjustment"
                    >
                      Product Stock Adjustment
                    </span>
                  </Link>
                </li>
                {/* SUB MENU */}
                <li className=" nav-item">
                  <a href="#">
                    <i className="bx bx-bulb" />
                    <span className="menu-title" data-i18n="Stock Report">
                      Stock Report
                    </span>
                  </a>
                  <ul className="menu-content">
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="Qty balance">
                          Qty balance
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="Stock Card">
                          Stock Card
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="Stock Count Form"
                        >
                          Stock Count Form
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="Qty Balance of Month"
                        >
                          Qty Balance of Month
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* END SUB MENU */}
              </ul>
            </li>
            <li className=" nav-item">
              <a href="#">
                <i className="bx bx-file" />
                <span
                  className="menu-title"
                  data-i18n="Accounting Management (A/R)"
                >
                  Accounting (A/R)
                </span>
              </a>
              <ul className="menu-content">
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Billing Note">
                      Billing Note
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Cust. Payment">
                      Cust. Payment
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Extra Payment">
                      Extra Payment
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Cheque status">
                      Cheque status
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Reconcile">
                      Reconcile
                    </span>
                  </Link>
                </li>
                {/* SUB MENU */}
                <li className=" nav-item">
                  <a href="#">
                    <i className="bx bx-bulb" />
                    <span className="menu-title" data-i18n="A/R Report">
                      A/R Report
                    </span>
                  </a>
                  <ul className="menu-content">
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="Inv. Overdue">
                          Inv. Overdue
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="Cheque due">
                          Cheque due
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="Cheque reject">
                          Cheque reject
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* END SUB MENU */}
              </ul>
            </li>
            <li className=" nav-item">
              <a href="#">
                <i className="bx bxs-file" />
                <span className="menu-title" data-i18n="VAT">
                  VAT
                </span>
              </a>
              <ul className="menu-content">
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Select VAT Bill">
                      Select VAT Bill
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="VAT Payment">
                      VAT Payment
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="VAT Formular">
                      VAT Formular
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="VAT Work Sheet">
                      VAT Work Sheet
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="VAT Tax Report">
                      VAT Tax Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Vat Adjust Stock">
                      Vat Adjust Stock
                    </span>
                  </Link>
                </li>
                {/* SUB MENU */}
                <li className=" nav-item">
                  <a href="#">
                    <i className="bx bx-bulb" />
                    <span className="menu-title" data-i18n="VAT Report">
                      VAT Report
                    </span>
                  </a>
                  <ul className="menu-content">
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span
                          className="menu-item"
                          data-i18n="Item Stock Balance"
                        >
                          Item Stock Balance
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="Item Stock Card">
                          Item Stock Card
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/About">
                        <i className="bx bx-right-arrow-alt" />
                        <span className="menu-item" data-i18n="VAT List Cheque">
                          VAT List Cheque
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* END SUB MENU */}
              </ul>
            </li>
            <li className=" nav-item">
              <a href="#">
                <i className="bx bx-wrench" />
                <span className="menu-title" data-i18n="User Control">
                  User Control
                </span>
              </a>
              <ul className="menu-content">
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Profile">
                      Register User
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Profile">
                      Add Position
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="PROVINCE (จังหวัด)">
                      PROVINCE (จังหวัด)
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="Area (ภูมิภาค)">
                      Area (ภูมิภาค)
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <i className="bx bx-right-arrow-alt" />
                    <span className="menu-item" data-i18n="District (อำเภอ)">
                      District (อำเภอ)
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav_left;
