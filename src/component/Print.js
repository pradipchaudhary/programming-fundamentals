import React from "react";

const Print = () => {
  return (
    <div>
      <input
        class="printBtn"
        type="button"
        value="Print Div"
        onclick="onPrint('printBill')"
      />
      <br />
      <div id="printBill">
        <div class="bill printBill">
          <div class="header">
            <div class="logo">
              <img src="bill-logo.png" alt="" />
            </div>
            <div class="title">
              <h2>Arniko Awasiya Secondary School</h2>
              <div>
                <span>
                  Tintolia-10, Biratnagar-10 <br />
                  Tel : +977-21-470149 <br />
                  Email : arniko470149@gmail.com <br />
                </span>
                <h4 id="copy">Institution Copy</h4>
              </div>
            </div>
            <div class="bill_date">
              Date : 2079-04-23 <br />
              Invoice No : 00000015
            </div>
          </div>
          <div class="content">
            <div class="student_detail">
              <div class="student_name">
                Name : <span> Samikshya Yadav </span>
              </div>
              <div class="student_program">
                Program : <span> SCHOOL [NURSERY]</span>
              </div>
            </div>
            <table>
              <tr>
                <td class="sn">SN</td>
                <td>Particulars</td>
                <td>Descriptions/Remarks</td>
                <td>Total</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Admission</td>
                <td></td>
                <td>1,100.00/2,100.00</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Exam</td>
                <td></td>
                <td>1,100.00/2,100.00</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  Miscellaneous
                  <table>
                    <tr>
                      <td>Tie</td>
                      <td>200</td>
                    </tr>
                    <tr>
                      <td>Belt</td>
                      <td>300</td>
                    </tr>
                  </table>
                </td>
                <td></td>
                <td>567890</td>
              </tr>
            </table>

            {/* <!-- === Total Amount --> */}
            <div class="total_amount">
              <div class="in_word">
                <div class="_remark">
                  <strong> Remark :- </strong>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                  <br />
                </div>

                <div class="_word">
                  <strong> In Word :- </strong>
                  <span> Eight Thousand Six Hundred Thirty </span>
                </div>
              </div>
              <div class="amount_detail">
                <table>
                  <tr>
                    <td>Grand total :</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>Previous Paid :</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>Scholarship :</td>
                    <td>3, 160.00</td>
                  </tr>
                  <tr>
                    <td>Discount :</td>
                    <td>8,630.00</td>
                  </tr>
                  <tr>
                    <td>Adjustment :</td>
                    <td>160.00</td>
                  </tr>
                  <tr>
                    <td>Paid Amount :</td>
                    <td>160.00</td>
                  </tr>
                  <tr>
                    <td>Dues Left :</td>
                    <td>160.00</td>
                  </tr>
                </table>
              </div>
            </div>

            <div class="received_by">
              <p>
                <strong> Received by : </strong> <span> Ganga Subedhi </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Print;
