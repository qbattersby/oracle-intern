<template>
  <div class="about">
    <div class="callout">
      <div class="cloud x1"><img src="../assets/img/cloud1.svg"></div>
      <div class="cloud x2"><img src="../assets/img/cloud2.svg"></div>
      <div class="cloud x3"><img src="../assets/img/cloud3.svg"></div>

      <svg version="1.1" id="bird" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 126.6 72.5" style="enable-background:new 0 0 126.6 72.5;" xml:space="preserve">
        <g id="body">
          <path fill="#42AA92" d="M112.6,8.8c2.3,6.8-1.4,14.1-8.1,16.4S90.4,23.8,88.1,17C85.8,10.3,89.4,3,96.2,0.7c0,0,0,0,0,0
            C103-1.6,110.3,2,112.6,8.8"/>
          <path fill="#42AA92" d="M22,35.1c10.7,17,33.7,24.7,55.6,17.4s42-30.6,33.6-47.1L22,35.1z"/>
          <polygon fill="#42AA92" points="1.2,54.5 24.6,35.6 0,36.1 	"/>
          <polygon fill="#403A3B" points="111.1,6.2 113,11.8 126.6,5.4 	"/>
          <polygon fill="#338D7A" points="0.7,46.6 1.3,54.3 22,37.7 	"/>
          <path fill="#403A3B" d="M100.7,10c0.8,1.1,2.3,1.5,3.4,0.7c1.1-0.8,1.5-2.3,0.7-3.4c-0.7-1.1-2.3-1.4-3.4-0.7
            C100.3,7.3,100,8.8,100.7,10C100.7,10,100.7,10,100.7,10"/>
        </g>
                <path id="wing" fill="#85CDB0" d="M34.8,65.6c6.4,2.5,13,4.5,19.7,6c3.1,0.5,6.2,0.8,9.3,0.9c19.8-0.2,44.7-17,32.5-43.8
          c-2.5-5-5.4-9.8-8.6-14.3L34.8,65.6z"/>
      </svg>

      <div class="callout-content grid-container text-center">
        <h1 class="callout-heading">About Oracle</h1>
          <div class="callout-copy">
            <p>So what exactly does Oracle do? By embedding innovative technologies in every aspect of our cloud, we empower businesses of all sizes on their journey to digital transformation.</p>
          </div>
        </div>
      </div>


    <section class="dark-bg">
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <div class="cell small-12 text-center">
            <h2>Work with Global Brands</h2>
            <p>At Oracle, you'll have the opportunity to help us power some of the world's largest and most recognizable brands. 430,000 customers in 175 countries worldwide trust Oracle to drive innovation for their businesses.</p>
          </div>
        </div>


        <div id="orbit" class="orbit" role="region" aria-label="Brands" data-orbit data-pause-on-hover="false">
          <ul class="orbit-container">
            <li class="is-active orbit-slide">
              <div class="brands grid-x grid-margin-x small-up-2 medium-up-3 large-up-4 align-center">
                <div class="cell">
                    <img src="../assets/img/fedex.svg">
                </div>
                <div class="cell">
                  <img src="../assets/img/nike.svg">
                </div>
                <div class="cell">
                  <img src="../assets/img/sony.svg">
                </div>
                <div class="cell">
                  <img src="../assets/img/starbucks.svg">
                </div>
                <div class="cell">
                  <img src="../assets/img/dropbox.svg">
                </div>
				<div class="cell">
                  <img class="wells" src="../assets/img/wellsfargo.svg">
                </div>
              </div>
            </li>
          </ul>
        </div>


      </div>
    </section>

    <section class="gray-bg">
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <div class="cell small-12 text-center">
            <h2>Scale and Innovation</h2>
            <p>Oracle is the #1 provider of business software in the world. Our cloud redefines how businesses modernize, innovate, and compete in a digital world. We deliver integrated cloud services that allow users and developers to build, deploy, and manage workloads seamlessly.</p>
          </div>
        </div>


        <div class="stats grid-x grid-margin-x align-stretch">

          <div class="cell medium-6 box-customers text-center">
            <div class="box-inner">
              <img src="../assets/img/globe.svg">
              <h3>430,000</h3>
              <p>Customers in <strong>175 <br>countries</strong></p>
            </div>
          </div>


          <div class="cell medium-6">
            <div class="grid-x grid-margin-x align-stretch">
              <div class="cell medium-6 box box-employees">
                <div class="box-inner">
                  <img src="../assets/img/person.svg">
                  <h3>137,000+</h3>
                  <p>Employees</p>
                </div>
              </div>
              <div class="cell medium-6 box box-nine">
                <div class="box-inner">

                  <h3>#9</h3>
                  <p>On LinkedIn’s Top 50<br>
                    U.S. Companies<br>
                    to Work For in 2019</p>
                </div>
              </div>
              <div class="cell medium-6 box box-students">
                <div class="box-inner">
                  <h3>6.3M<br>
                    Students</h3>
                  <p>Supported annually<br>
                    in 128 countries<br>
                    through Oracle&nbsp;Academy</p>
                </div>
              </div>
              <div class="cell medium-6 box box-patents">
                <div class="box-inner">
                  <img src="../assets/img/patents.svg">
                  <h3>18,000+</h3>
                  <p>Patents worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>


  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      msg: 'About Oracle',
    };
  },
  mounted() {
    this.orbit = new Foundation.Orbit($('#orbit'), {
      // These options can be declarative using the data attributes
      timerDelay: 3000,
      animInFromLeft: 'fade-in',
      animInFromRight: 'fade-in',
      animOutToLeft: 'fade-out',
      animOutToRight: 'fade-out',


    });
  },
  destroyed() {
    this.orbit.destroy();
  },
};
</script>


<style lang="scss" scoped>


  .call-button {
    border-radius: 20px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .callout {
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 23.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1680.3 725.3' style='enable-background:new 0 0 1680.3 725.3;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bclip-path:url(%23SVGID_2_);%7D .st1%7Bfill:%23BDE6EE;%7D .st2%7Bclip-path:url(%23SVGID_4_);%7D .st3%7Bfill:%235FA754;%7D .st4%7Bfill:%23367F2E;%7D .st5%7Bfill:%231E5623;%7D .st6%7Bfill:%23153C51;%7D .st7%7Bclip-path:url(%23SVGID_6_);%7D .st8%7Bfill:%2316202F;%7D .st9%7Bfill:%23212E40;%7D .st10%7Bfill:%23478B91;%7D .st11%7Bfill:%23265E72;%7D .st12%7Bopacity:0.5;%7D .st13%7Bclip-path:url(%23SVGID_8_);%7D .st14%7Bclip-path:url(%23SVGID_10_);%7D .st15%7Bfill:none;stroke:%23FFFFFF;stroke-width:2.94;stroke-miterlimit:10;%7D .st16%7Bopacity:0.3;%7D .st17%7Bclip-path:url(%23SVGID_12_);%7D .st18%7Bclip-path:url(%23SVGID_14_);%7D .st19%7Bfill:%23081E31;%7D .st20%7Bfill:%23CBEBE6;%7D .st21%7Bclip-path:url(%23SVGID_16_);%7D .st22%7Bopacity:0.6;%7D .st23%7Bclip-path:url(%23SVGID_18_);%7D .st24%7Bclip-path:url(%23SVGID_20_);%7D .st25%7Bfill:none;stroke:%23FFFFFF;stroke-width:1.47;stroke-miterlimit:10;%7D .st26%7Bclip-path:url(%23SVGID_22_);%7D .st27%7Bclip-path:url(%23SVGID_24_);%7D .st28%7Bclip-path:url(%23SVGID_26_);%7D .st29%7Bopacity:0.7;%7D .st30%7Bclip-path:url(%23SVGID_28_);%7D .st31%7Bopacity:0.4;%7D .st32%7Bclip-path:url(%23SVGID_30_);%7D .st33%7Bclip-path:url(%23SVGID_32_);%7D .st34%7Bclip-path:url(%23SVGID_34_);%7D .st35%7Bclip-path:url(%23SVGID_36_);%7D .st36%7Bclip-path:url(%23SVGID_38_);%7D .st37%7Bclip-path:url(%23SVGID_40_);%7D .st38%7Bclip-path:url(%23SVGID_42_);%7D .st39%7Bfill:none;stroke:%23FFFFFF;stroke-width:2.56;stroke-miterlimit:10;%7D .st40%7Bclip-path:url(%23SVGID_44_);%7D .st41%7Bclip-path:url(%23SVGID_46_);%7D .st42%7Bclip-path:url(%23SVGID_48_);%7D .st43%7Bclip-path:url(%23SVGID_50_);%7D .st44%7Bfill:%23FFFFFF;%7D .st45%7Bfill:%23C0C2B8;%7D .st46%7Bfill:%23656362;%7D .st47%7Bfill:%239F8567;%7D .st48%7Bfill:%2377180B;%7D .st49%7Bfill:%233F0005;%7D .st50%7Bclip-path:url(%23SVGID_52_);%7D .st51%7Bfill:%2300758F;%7D .st52%7Bfill:%23478A90;%7D .st53%7Bfill:none;stroke:%23DAD9D2;stroke-width:0.45;%7D%0A%3C/style%3E%3Ctitle%3Eabout-bg%3C/title%3E%3Cg%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_1_' y='-5.1' width='1680.3' height='792.1'/%3E%3C/defs%3E%3CclipPath id='SVGID_2_'%3E%3Cuse xlink:href='%23SVGID_1_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st0'%3E%3Crect x='-7.3' y='-761.3' class='st1' width='1692.9' height='1486.7'/%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_3_' x='1.7' y='-45.4' width='1678.6' height='839.3'/%3E%3C/defs%3E%3CclipPath id='SVGID_4_'%3E%3Cuse xlink:href='%23SVGID_3_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st2'%3E%3Cpath class='st3' d='M727.4,648.4c-25.9,0-31,43.1-87.3,43.1h176C777.9,691.5,771.3,648.4,727.4,648.4'/%3E%3Cpath class='st4' d='M649.1,646c-76.2,0-85.1,46.2-151.3,46.2H803C736.9,692.2,725.3,646,649.1,646'/%3E%3Cpath class='st3' d='M569.4,669.6c-60.8,0-78.4,22.6-131.2,22.6h262.3C647.8,692.2,630.2,669.6,569.4,669.6'/%3E%3Cpath class='st5' d='M695.3,692.1c0,0,52.3-39,98-39S961,695.2,961,695.2l-278.9,6.3L695.3,692.1z'/%3E%3Cpath class='st6' d='M964.9,573.5c0,0,18-9,55-8.8c14,0,53.6,2.6,55.4,8.1v123.3H963.4C963.4,696.1,964.5,573.1,964.9,573.5'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cdefs%3E%3Cpath id='SVGID_5_' d='M964.9,573.5c-0.4-0.4-1.5,122.6-1.5,122.6h111.9V572.8c-1.8-5.5-41.4-8-55.4-8.1h-0.9 C982.6,564.7,964.9,573.5,964.9,573.5'/%3E%3C/defs%3E%3CclipPath id='SVGID_6_'%3E%3Cuse xlink:href='%23SVGID_5_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st7'%3E%3Crect x='1039.8' y='557' class='st8' width='51.4' height='150.4'/%3E%3Crect x='1020.7' y='557' class='st9' width='19.1' height='150.4'/%3E%3Crect x='964.2' y='557' class='st10' width='8.1' height='150.4'/%3E%3Crect x='972.2' y='557' class='st11' width='13.2' height='150.4'/%3E%3Cg class='st12'%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_7_' x='955.5' y='569.8' width='124.7' height='105'/%3E%3C/defs%3E%3CclipPath id='SVGID_8_'%3E%3Cuse xlink:href='%23SVGID_7_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st13'%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_9_' x='955.5' y='569.8' width='124.7' height='105'/%3E%3C/defs%3E%3CclipPath id='SVGID_10_'%3E%3Cuse xlink:href='%23SVGID_9_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st14'%3E%3Cpath class='st15' d='M961.1,580.1c0,0,44.5-18.7,118.3-1.8'/%3E%3Cpath class='st15' d='M958.5,592.6c0,0,44.8-13.2,118.5-0.4'/%3E%3Cpath class='st15' d='M958.9,605.1c0,0,66.4-9.2,117-1.1'/%3E%3Cpath class='st15' d='M958.9,617.9c0,0,66.4-9.2,117-1.1'/%3E%3Cpath class='st15' d='M956.7,631.8c0,0,76-7.7,123.3-0.7'/%3E%3Cpath class='st15' d='M958.5,646.2c39.5-3.6,79.2-4.5,118.9-2.6'/%3E%3Cpath class='st15' d='M955.6,659.4c0,0,108.6-6.6,123.6-2.6'/%3E%3Cline class='st15' x1='958.2' y1='673.3' x2='1077.8' y2='671.1'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg class='st16'%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_11_' x='1011.3' y='548.3' width='74.9' height='158.5'/%3E%3C/defs%3E%3CclipPath id='SVGID_12_'%3E%3Cuse xlink:href='%23SVGID_11_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st17'%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_13_' x='1011.3' y='548.3' width='74.9' height='158.5'/%3E%3C/defs%3E%3CclipPath id='SVGID_14_'%3E%3Cuse xlink:href='%23SVGID_13_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st18'%3E%3Crect x='1011.3' y='548.3' class='st8' width='74.8' height='158.5'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Crect x='1046.3' y='579.7' class='st6' width='67.9' height='116.3'/%3E%3Crect x='1093.3' y='579.7' class='st19' width='20.9' height='116.3'/%3E%3Crect x='1046.3' y='582.7' class='st20' width='67.9' height='4'/%3E%3Crect x='1046.3' y='597' class='st20' width='67.9' height='4'/%3E%3Crect x='1046.3' y='610.2' class='st20' width='67.9' height='4'/%3E%3Crect x='1046.3' y='625.2' class='st20' width='67.9' height='4'/%3E%3Crect x='1046.3' y='638.1' class='st20' width='67.9' height='4'/%3E%3Crect x='1046.3' y='653.1' class='st20' width='67.9' height='4'/%3E%3Cg%3E%3Cdefs%3E%3Cpath id='SVGID_15_' d='M1116.8,473.1c-3.7,0-2.6,223.8-2.6,223.8h126.6V468.7c-6.6-5.9-45.4-6.8-58.7-7.3 c-3.9-0.2-7.5-0.2-11-0.2C1127.5,461.1,1116.8,473.1,1116.8,473.1'/%3E%3C/defs%3E%3CclipPath id='SVGID_16_'%3E%3Cuse xlink:href='%23SVGID_15_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st21'%3E%3Crect x='1108.7' y='459.2' class='st6' width='143.1' height='242.9'/%3E%3Crect x='1108.7' y='459.2' class='st10' width='15.4' height='235.6'/%3E%3Crect x='1124.1' y='447.9' class='st11' width='16.9' height='258'/%3E%3Cg class='st22'%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_17_' x='1112.4' y='453.3' width='142.4' height='267.1'/%3E%3C/defs%3E%3CclipPath id='SVGID_18_'%3E%3Cuse xlink:href='%23SVGID_17_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st23'%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_19_' x='1112.4' y='453.3' width='142.4' height='267.1'/%3E%3C/defs%3E%3CclipPath id='SVGID_20_'%3E%3Cuse xlink:href='%23SVGID_19_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st24'%3E%3Cpolygon class='st8' points='1254.8,453.3 1194.6,453.3 1194.6,583.9 1182.8,583.9 1182.8,708.7 1201.2,708.7 1201.2,706.5 1254.8,706.5 '/%3E%3Cpolygon class='st8' points='1173.3,601.5 1165.2,601.5 1165.2,717.5 1172.6,717.5 1172.6,720.4 1178.4,720.4 1178.4,620.6 1173.3,620.6 '/%3E%3Cpolygon class='st8' points='1145.4,634.5 1136.6,634.5 1136.6,644.8 1124.1,644.8 1124.1,619.1 1112.4,619.1 1112.4,718.9 1124.1,718.9 1124.1,707.9 1158.6,707.9 1158.6,644.8 1145.4,644.8 '/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cpath class='st25' d='M1111.7,481.2c0,0,13.2-12.5,55.8-12.5c0,0,49.2-1.5,77.8,9.5'/%3E%3Cpath class='st25' d='M1107.3,497.3c0,0,16.1-10.3,55-11.7c0,0,39.6-5.1,86.6,5.9'/%3E%3Cpath class='st25' d='M1107.3,514.9c0,0,16.1-10.3,55-11.7c0,0,39.6-5.1,86.6,5.9'/%3E%3Cpath class='st25' d='M1107.3,532.5c0,0,16.1-10.3,55-11.7c0,0,39.6-5.1,86.6,5.9'/%3E%3Cpath class='st25' d='M1107.3,550.1c0,0,16.1-10.3,55-11.7c0,0,39.6-5.1,86.6,5.9'/%3E%3Cpath class='st25' d='M1107.3,567c0,0-1.5-8.1,37.4-9.5c0,0,57.2-7.3,104.2,3.7'/%3E%3Cpath class='st25' d='M1107.3,583.9c0,0-1.5-8.1,37.4-9.5c0,0,57.2-7.3,104.2,3.7'/%3E%3Cpath class='st25' d='M1103.6,601.5c0,0,2.3-5.6,41.1-8.8c26-2.2,57.2-7.3,104.2,3.7'/%3E%3Cpath class='st25' d='M1101.4,614.7c0,0,2.3-1.9,41.1-5.1c26-2.2,73.4-6.6,120.3,4.4'/%3E%3Cpath class='st25' d='M1101.4,633.1c0,0,2.3-1.9,41.1-5.1c26-2.2,73.4-6.6,120.3,4.4'/%3E%3Cpath class='st25' d='M1101.4,649.2c0,0,2.3-1.9,41.1-5.1c26-2.2,73.4-6.6,120.3,4.4'/%3E%3Cg class='st16'%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_21_' x='1200.6' y='453.7' width='52.8' height='288.4'/%3E%3C/defs%3E%3CclipPath id='SVGID_22_'%3E%3Cuse xlink:href='%23SVGID_21_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st26'%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_23_' x='1200.6' y='453.7' width='52.8' height='288.4'/%3E%3C/defs%3E%3CclipPath id='SVGID_24_'%3E%3Cuse xlink:href='%23SVGID_23_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st27'%3E%3Crect x='1200.6' y='453.7' class='st19' width='52.8' height='288.4'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cpolygon class='st6' points='1227,477.7 1228.3,690.9 1228.3,690.9 1379.9,689.8 1376.9,471.5 '/%3E%3Cpolygon class='st8' points='1209.3,486.2 1208.2,690.9 1228.3,690.9 1226.5,477.9 '/%3E%3Cg%3E%3Cdefs%3E%3Cpolygon id='SVGID_25_' points='1226.9,477.7 1209.3,486.2 1208.2,690.9 1228.3,690.9 1379.9,689.8 1376.9,471.5 '/%3E%3C/defs%3E%3CclipPath id='SVGID_26_'%3E%3Cuse xlink:href='%23SVGID_25_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st28'%3E%3Cg class='st29'%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_27_' x='1207.8' y='470.4' width='177.1' height='209.1'/%3E%3C/defs%3E%3CclipPath id='SVGID_28_'%3E%3Cuse xlink:href='%23SVGID_27_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st30'%3E%3Cpolygon class='st20' points='1377.6,470.4 1226.9,475.5 1208.2,484.3 1208.2,492.1 1226.9,483.2 1377.7,477 1377.7,470.4 '/%3E%3Cpolygon class='st20' points='1226.9,492.8 1208.2,501.6 1208.2,509.3 1226.9,500.5 1377.7,492.4 1377.7,485.8 '/%3E%3Cpolygon class='st20' points='1226.9,511.1 1208.2,519.9 1208.2,527.6 1226.9,518.8 1377.7,510.8 1377.7,504.2 '/%3E%3Cpolygon class='st20' points='1226.9,528.7 1208.2,535 1208.2,542.7 1226.9,536.4 1377.7,528.4 1377.7,521.8 '/%3E%3Cpolygon class='st20' points='1226.9,547.1 1208.2,550.8 1208.2,558.5 1226.9,554.8 1377.7,548.2 1377.7,541.6 '/%3E%3Cpolygon class='st20' points='1226.9,565.1 1208.2,567.6 1208.2,575.3 1226.9,572.8 1384.9,567.8 1384.9,561.2 '/%3E%3Cpolygon class='st20' points='1226.9,583 1207.8,584.1 1207.8,591.9 1226.9,590.8 1383.9,585.4 1383.9,578.8 '/%3E%3Cpolygon class='st20' points='1226.9,599.9 1208.2,601.4 1208.2,609.1 1226.9,607.6 1380.5,603 1380.5,596.4 '/%3E%3Cpolygon class='st20' points='1226.9,654.6 1208.2,655 1208.2,662.7 1226.9,662.3 1383.9,658.3 1383.9,651.7 '/%3E%3Cpolygon class='st20' points='1226.9,617.9 1208.2,618.3 1208.2,626 1226.9,625.6 1381,620.5 1381,613.9 '/%3E%3Cpolygon class='st20' points='1226.9,636.2 1207.8,635.9 1207.8,643.6 1226.9,644 1382.4,638.8 1382.4,632.2 '/%3E%3Cpolygon class='st20' points='1226.9,671.5 1208.2,671.8 1208.2,679.5 1226.9,679.2 1383.6,676.2 1383.6,669.6 '/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg class='st31'%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_29_' x='1322.4' y='464.7' width='80.7' height='259.8'/%3E%3C/defs%3E%3CclipPath id='SVGID_30_'%3E%3Cuse xlink:href='%23SVGID_29_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st32'%3E%3Cpolygon class='st19' points='1352.2,464.7 1352.2,552.7 1322.4,552.7 1322.4,706.8 1352.2,706.8 1352.2,724.4 1403.1,724.4 1403.1,464.7 '/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg class='st31'%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_31_' x='1294.8' y='623.2' width='17' height='81.4'/%3E%3C/defs%3E%3CclipPath id='SVGID_32_'%3E%3Cuse xlink:href='%23SVGID_31_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st33'%3E%3Crect x='1294.9' y='623.2' class='st19' width='17' height='81.4'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg class='st31'%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_33_' x='1224.8' y='565.9' width='40.3' height='138.7'/%3E%3C/defs%3E%3CclipPath id='SVGID_34_'%3E%3Cuse xlink:href='%23SVGID_33_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st34'%3E%3Cpolygon class='st19' points='1224.8,565.9 1224.8,704.6 1243.9,704.6 1265.1,704.6 1265.1,643 1243.9,643 1243.9,565.9 '/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg class='st22'%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_35_' x='1202.8' y='466.9' width='22' height='235.5'/%3E%3C/defs%3E%3CclipPath id='SVGID_36_'%3E%3Cuse xlink:href='%23SVGID_35_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st35'%3E%3Crect x='1202.8' y='466.9' class='st19' width='22' height='235.5'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cdefs%3E%3Cpath id='SVGID_37_' d='M1378,266.4c-5.9,0-4.2,419.8-4.2,419.8h205.2v-428c-10.7-11-73.6-12.7-95.2-13.8 c-6.3-0.3-12.2-0.4-17.8-0.4C1395.4,243.9,1378,266.4,1378,266.4'/%3E%3C/defs%3E%3CclipPath id='SVGID_38_'%3E%3Cuse xlink:href='%23SVGID_37_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st36'%3E%3Crect x='1365' y='240.2' class='st6' width='232' height='455.6'/%3E%3Crect x='1365' y='240.2' class='st10' width='25' height='441.8'/%3E%3Crect x='1389.9' y='219.2' class='st11' width='27.4' height='483.9'/%3E%3Cg class='st22'%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_39_' x='1370.9' y='229.2' width='230.8' height='501'/%3E%3C/defs%3E%3CclipPath id='SVGID_40_'%3E%3Cuse xlink:href='%23SVGID_39_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st37'%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_41_' x='1370.9' y='229.2' width='230.8' height='501'/%3E%3C/defs%3E%3CclipPath id='SVGID_42_'%3E%3Cuse xlink:href='%23SVGID_41_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st38'%3E%3Cpolygon class='st8' points='1601.7,229.2 1504.1,229.2 1504.1,474.2 1485.1,474.2 1485.1,708.2 1514.9,708.2 1514.9,704 1601.7,704 '/%3E%3Cpolygon class='st8' points='1469.6,507.2 1456.6,507.2 1456.6,724.7 1468.5,724.7 1468.5,730.2 1478,730.2 1478,543 1469.6,543 '/%3E%3Cpolygon class='st8' points='1424.4,569.2 1410.2,569.2 1410.2,588.4 1389.9,588.4 1389.9,540.3 1370.9,540.3 1370.9,727.4 1389.9,727.4 1389.9,706.8 1445.9,706.8 1445.9,588.4 1424.4,588.4 '/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cpath class='st39' d='M1369.7,281.5c0,0,21.4-23.4,90.4-23.4c0,0,79.7-2.7,126.1,17.9'/%3E%3Cpath class='st39' d='M1362.6,311.8c0,0,26.2-19.3,89.2-22c0,0,64.2-9.6,140.4,11'/%3E%3Cpath class='st39' d='M1362.6,344.8c0,0,26.2-19.3,89.2-22c0,0,64.2-9.6,140.4,11'/%3E%3Cpath class='st39' d='M1362.6,377.9c0,0,26.2-19.3,89.2-22c0,0,64.2-9.6,140.4,11'/%3E%3Cpath class='st39' d='M1362.6,410.9c0,0,26.2-19.3,89.2-22c0,0,64.2-9.6,140.4,11'/%3E%3Cpath class='st39' d='M1362.6,442.5c0,0-2.4-15.1,60.7-17.9c0,0,92.8-13.8,168.9,6.9'/%3E%3Cpath class='st39' d='M1362.6,474.2c0,0-2.4-15.1,60.7-17.9c0,0,92.8-13.8,168.9,6.9'/%3E%3Cpath class='st39' d='M1356.6,507.2c0,0,3.7-10.5,66.6-16.5c42.1-4,92.8-13.8,168.9,6.9'/%3E%3Cpath class='st39' d='M1353.1,532c0,0,3.7-3.6,66.6-9.6c42.1-4,119-12.4,195.1,8.3'/%3E%3Cpath class='st39' d='M1353.1,566.4c0,0,3.7-3.6,66.6-9.6c42.1-4,119-12.4,195.1,8.3'/%3E%3Cpath class='st39' d='M1353.1,596.7c0,0,3.7-3.6,66.6-9.6c42.1-4,119-12.4,195.1,8.3'/%3E%3C/g%3E%3C/g%3E%3Cpolygon class='st6' points='1538.6,254.1 1540.6,686.1 1680.3,684.7 1680.3,245.8 '/%3E%3Cpolygon class='st8' points='1513.2,271.2 1511.6,686.1 1540.6,686.1 1537.9,254.5 '/%3E%3Cg%3E%3Cdefs%3E%3Cpolygon id='SVGID_43_' points='1538.5,254.1 1513.2,271.2 1511.6,686.1 1540.6,686.1 1680.3,684.7 1680.3,245.8 '/%3E%3C/defs%3E%3CclipPath id='SVGID_44_'%3E%3Cuse xlink:href='%23SVGID_43_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st40'%3E%3Cg class='st29'%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_45_' x='1511.1' y='239.2' width='254.3' height='423.8'/%3E%3C/defs%3E%3CclipPath id='SVGID_46_'%3E%3Cuse xlink:href='%23SVGID_45_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st41'%3E%3Cpolygon class='st20' points='1755,239.2 1538.5,249.6 1511.6,267.5 1511.6,283.1 1538.5,265.2 1755,252.6 1755,239.2 '/%3E%3Cpolygon class='st20' points='1538.5,284.6 1511.6,302.4 1511.6,318 1538.5,300.2 1755,283.8 1755,270.4 '/%3E%3Cpolygon class='st20' points='1538.5,321.8 1511.6,339.6 1511.6,355.2 1538.5,337.4 1755,321 1755,307.6 '/%3E%3Cpolygon class='st20' points='1538.5,357.4 1511.6,370.1 1511.6,385.7 1538.5,373.1 1755,356.7 1755,343.3 '/%3E%3Cpolygon class='st20' points='1538.5,394.6 1511.6,402.1 1511.6,417.7 1538.5,410.2 1755,396.9 1755,383.5 '/%3E%3Cpolygon class='st20' points='1538.5,431.1 1511.6,436.3 1511.6,451.9 1538.5,446.7 1765.4,436.5 1765.4,423.1 '/%3E%3Cpolygon class='st20' points='1538.5,467.5 1511.1,469.7 1511.1,485.3 1538.5,483.1 1763.9,472.2 1763.9,458.8 '/%3E%3Cpolygon class='st20' points='1538.5,501.7 1511.6,504.7 1511.6,520.3 1538.5,517.3 1759,507.9 1759,494.5 '/%3E%3Cpolygon class='st20' points='1538.5,612.5 1511.6,613.2 1511.6,628.8 1538.5,628.1 1763.9,619.9 1763.9,606.5 '/%3E%3Cpolygon class='st20' points='1538.5,538.1 1511.6,538.9 1511.6,554.5 1538.5,553.7 1759.7,543.3 1759.7,529.9 '/%3E%3Cpolygon class='st20' points='1538.5,575.3 1511.1,574.6 1511.1,590.2 1538.5,590.9 1761.8,580.5 1761.8,567.1 '/%3E%3Cpolygon class='st20' points='1538.5,646.7 1511.6,647.4 1511.6,663 1538.5,662.3 1763.5,656.2 1763.5,642.8 '/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg class='st16'%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_47_' x='1541.8' y='341.4' width='244.3' height='369.8'/%3E%3C/defs%3E%3CclipPath id='SVGID_48_'%3E%3Cuse xlink:href='%23SVGID_47_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st42'%3E%3Cpolygon class='st19' points='1678,341.4 1678,453.7 1647.9,453.7 1647.9,607.8 1593.9,607.8 1593.9,695.8 1647.9,695.8 1647.9,706.8 1678,706.8 1678,711.2 1786.1,711.2 1786.1,341.4 '/%3E%3Crect x='1541.8' y='480.1' class='st19' width='32.1' height='222.3'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg class='st12'%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_49_' x='1500' y='246.7' width='39.6' height='455.7'/%3E%3C/defs%3E%3CclipPath id='SVGID_50_'%3E%3Cuse xlink:href='%23SVGID_49_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st43'%3E%3Crect x='1500' y='246.7' class='st19' width='39.6' height='455.7'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Crect x='961.2' y='671.7' class='st44' width='83.7' height='4.4'/%3E%3Crect x='964.4' y='674.9' class='st44' width='2.5' height='28.6'/%3E%3Crect x='970.5' y='674.2' class='st44' width='2.7' height='28.1'/%3E%3Crect x='989.6' y='674.7' class='st44' width='3.4' height='29.6'/%3E%3Crect x='1018' y='674.9' class='st44' width='2.7' height='22.5'/%3E%3Crect x='1003.3' y='674.7' class='st44' width='2.7' height='24.8'/%3E%3Crect x='1044.6' y='667.6' class='st44' width='70.4' height='4.7'/%3E%3Crect x='1112.1' y='661.9' class='st44' width='98.8' height='5.4'/%3E%3Crect x='1049.8' y='671.5' class='st44' width='3.2' height='25.9'/%3E%3Crect x='1106.3' y='671.5' class='st44' width='3.2' height='25.9'/%3E%3Crect x='1119.5' y='667.1' class='st44' width='3.4' height='31.3'/%3E%3Crect x='1141.3' y='667.1' class='st44' width='3.4' height='31.3'/%3E%3Crect x='1204.6' y='667.1' class='st44' width='3.4' height='31.3'/%3E%3Crect x='1225.3' y='642.1' class='st45' width='5.9' height='46.2'/%3E%3Crect x='1254.6' y='643.6' class='st46' width='6.6' height='45.5'/%3E%3Crect x='1215' y='633.3' class='st44' width='133.6' height='11'/%3E%3Cpolygon class='st47' points='1395.8,682.6 0,688.1 0,714.5 1680.3,713.5 1680.3,678.5 '/%3E%3Crect x='1485.9' y='646.3' class='st48' width='9.2' height='47.8'/%3E%3Crect x='1490.4' y='646.3' class='st49' width='4.8' height='47.8'/%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_51_' y='-45.4' width='1680.3' height='839.3'/%3E%3C/defs%3E%3CclipPath id='SVGID_52_'%3E%3Cuse xlink:href='%23SVGID_51_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st50'%3E%3Cpath class='st3' d='M1490.6,474.1v184.3c0,0-25.3,9.1-26.7-56.7c0,0-1-67.6,18.9-114.8 C1482.8,486.8,1487.2,473.2,1490.6,474.1'/%3E%3Cpath class='st4' d='M1490.8,474.1v184.3c0,0,25.3,9.1,26.7-56.7c0,0,1-67.6-18.9-114.8 C1498.7,486.8,1494.3,473.2,1490.8,474.1'/%3E%3Crect x='1549.8' y='652.2' class='st48' width='9.2' height='41.9'/%3E%3Crect x='1554.2' y='652.2' class='st49' width='4.7' height='41.9'/%3E%3Cpath class='st3' d='M1554.4,501.2v161.6c0,0-25.3,8-26.7-49.8c0,0-1-59.3,18.9-100.7C1546.6,512.3,1551,500.4,1554.4,501.2'/%3E%3Cpath class='st4' d='M1554.7,501.2v161.6c0,0,25.3,8,26.7-49.8c0,0,1-59.3-18.9-100.7C1562.5,512.3,1558.1,500.4,1554.7,501.2' /%3E%3Crect x='1358.3' y='656.9' class='st48' width='9.2' height='37.2'/%3E%3Crect x='1362.7' y='656.9' class='st49' width='4.7' height='37.2'/%3E%3Cpath class='st3' d='M1362.9,522.9v143.4c0,0-25.3,7.1-26.7-44.2c0,0-1-52.6,18.9-89.4C1355.1,532.8,1359.5,522.2,1362.9,522.9 '/%3E%3Cpath class='st4' d='M1363.2,522.9v143.4c0,0,25.3,7.1,26.7-44.2c0,0,1-52.6-18.9-89.4C1371,532.8,1366.6,522.2,1363.2,522.9' /%3E%3Crect x='1422.1' y='657.5' class='st48' width='9.2' height='36.6'/%3E%3Crect x='1426.5' y='657.5' class='st49' width='4.7' height='36.6'/%3E%3Cpath class='st3' d='M1426.8,525.6v141.2c0,0-25.3,7-26.7-43.5c0,0-1-51.8,18.9-88C1418.9,535.3,1423.3,524.9,1426.8,525.6'/%3E%3Cpath class='st4' d='M1427,525.6v141.2c0,0,25.3,7,26.7-43.5c0,0,1-51.8-18.9-88C1434.9,535.3,1430.4,524.9,1427,525.6'/%3E%3Crect x='1210.8' y='655.1' class='st48' width='7.5' height='39'/%3E%3Crect x='1214.4' y='655.1' class='st49' width='3.9' height='39'/%3E%3Cpath class='st3' d='M1214.6,514.7V665c0,0-20.6,7.4-21.8-46.3c0,0-0.8-55.1,15.4-93.6C1208.2,525.1,1211.8,514,1214.6,514.7' /%3E%3Cpath class='st4' d='M1214.8,514.7V665c0,0,20.6,7.4,21.8-46.3c0,0,0.8-55.1-15.4-93.6C1221.2,525.1,1217.6,514,1214.8,514.7' /%3E%3Crect x='1262.8' y='659.9' class='st48' width='7.5' height='34.2'/%3E%3Crect x='1266.4' y='659.9' class='st49' width='3.9' height='34.2'/%3E%3Cpath class='st3' d='M1266.7,536.8v131.8c0,0-20.6,6.5-21.8-40.6c0,0-0.8-48.4,15.4-82.1 C1260.3,545.9,1263.9,536.2,1266.7,536.8'/%3E%3Cpath class='st4' d='M1266.8,536.8v131.8c0,0,20.6,6.5,21.8-40.6c0,0,0.8-48.4-15.4-82.1 C1273.2,545.9,1269.7,536.2,1266.8,536.8'/%3E%3Crect x='1102.8' y='670.4' class='st48' width='5.8' height='23.7'/%3E%3Crect x='1105.5' y='670.4' class='st49' width='3' height='23.7'/%3E%3Cpath class='st3' d='M1105.7,585.2v91.3c0,0-16.1,4.5-17-28.1c0,0-0.6-33.5,12-56.9C1100.7,591.5,1103.5,584.7,1105.7,585.2'/%3E%3Cpath class='st4' d='M1105.9,585.2v91.3c0,0,16.1,4.5,17-28.1c0,0,0.6-33.5-12-56.9C1110.9,591.5,1108.1,584.7,1105.9,585.2'/%3E%3Crect x='1158.8' y='664.2' class='st48' width='7.5' height='29.9'/%3E%3Crect x='1162.3' y='664.2' class='st49' width='3.9' height='29.9'/%3E%3Cpath class='st3' d='M1162.5,556.7v115.1c0,0-20.6,5.7-21.8-35.4c0,0-0.8-42.3,15.4-71.7 C1156.1,564.6,1159.7,556.1,1162.5,556.7'/%3E%3Cpath class='st4' d='M1162.7,556.7v115.1c0,0,20.6,5.7,21.8-35.4c0,0,0.8-42.3-15.4-71.7 C1169.1,564.6,1165.5,556.1,1162.7,556.7'/%3E%3Crect x='953.7' y='676.3' class='st48' width='4.9' height='21.5'/%3E%3Crect x='956.1' y='676.3' class='st49' width='2.5' height='21.5'/%3E%3Cpath class='st3' d='M956.2,598.8v82.9c0,0-13.5,4.1-14.3-25.5c0,0-0.5-30.4,10.1-51.7C952,604.6,954.4,598.4,956.2,598.8'/%3E%3Cpath class='st4' d='M956.4,598.8v82.9c0,0,13.5,4.1,14.3-25.5c0,0,0.5-30.4-10.1-51.7C960.6,604.6,958.2,598.4,956.4,598.8'/%3E%3Crect x='-0.9' y='713.4' class='st51' width='1728.9' height='11.9'/%3E%3Cpath class='st52' d='M1092.8,799h601.2c1.2,0,2.1-0.9,2.1-2.1v-1.1c0-1.2-0.9-2.1-2.1-2.1h-601.2c-1.2,0-2.1,0.9-2.1,2.1v1.1 C1090.7,798,1091.6,799,1092.8,799'/%3E%3Crect x='792.8' y='679.3' class='st48' width='3.9' height='17'/%3E%3Crect x='794.7' y='679.3' class='st49' width='2' height='17'/%3E%3Cpath class='st3' d='M794.8,617.9v65.7c0,0-10.8,3.2-11.4-20.2c0,0-0.4-24.1,8-40.9C791.4,622.5,793.3,617.6,794.8,617.9'/%3E%3Cpath class='st4' d='M794.9,617.9v65.7c0,0,10.8,3.2,11.4-20.2c0,0,0.4-24.1-8.1-40.9C798.2,622.5,796.4,617.6,794.9,617.9'/%3E%3Cpath class='st52' d='M158.2,799h601.2c1.2,0,2.1-0.9,2.1-2.1v-1.1c0-1.2-0.9-2.1-2.1-2.1H158.2c-1.2,0-2.1,0.9-2.1,2.1v1.1 C156.1,798,157,799,158.2,799'/%3E%3C/g%3E%3C/g%3E%3Cline class='st53' x1='905.5' y1='368.2' x2='1241.2' y2='368.2'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
    background-size: cover;
    background-position: center right;
    @include breakpoint(large only) {
      background-position: bottom left;
    }
    @include breakpoint(medium down) {
      background-position: bottom center;
      background-size: cover;
    }
  }

  .callout-content {
    margin-top:27vh;
    opacity:0;
    animation:fadeIn ease-in 1;
    animation-fill-mode:forwards;
    animation-duration:0.5s;
    animation-delay: 0.5s;
    @include breakpoint(small only) {
      margin-top:10vh;
    }
  }

  #bird {
    position:absolute;
    top:23vh;
    animation: flyby 40s linear infinite;
    @include breakpoint(small only) {
      top:20vh;
      animation: flyby 20s linear infinite;
    }
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    #bird {
      top:-150px;
      animation: unset;
    }
  }

  .x1, .x2 {
    animation: unset;
  }

  .x3 {
    animation: unset;
    width:142px;
    height:auto;
    bottom:25%;
    left:25%;
  }

  .brands {
    margin-top:50px;
    .cell {
      background: rgba(0,117,143,0.2);
      height:130px;
      @include breakpoint(small) {
        height:100px;
      }
      margin-bottom:20px;
      display: flex;
      justify-content: center; /* align horizontal */
      align-items: center; /* align vertical */
      img {
        max-width:75%;
        max-height:50px;
        @include breakpoint(small) {
         max-height:30px;
        }
      }
    }
  }


  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .brands .cell img.wells {
      width: 75%;
    }
  }



  .stats {
    margin-top:50px;
  }

  .box-customers {
    background: #942645;
    color:white;
    height:580px;
    display: flex;
    justify-content: center; /* align horizontal */
    align-items: center; /* align vertical */
    margin-bottom:20px;
    @include breakpoint(small only) {
      height:400px;
    }
    img {
      width:50%;
      height:auto;
      margin-bottom:20px;
    }
    h3 {
      font-size: 60px;
      font-weight:900;
      color: #db7b9d;
      margin-bottom:0;
    }
    p {
      font-size:32px;
      line-height:36px;
    }
  }
  .box {
    display: flex;
    justify-content: center; /* align horizontal */
    align-items: center; /* align vertical */
    text-align: center;
    margin-bottom:20px;
    height:280px;
    padding: 1rem;
    img {
      width:40%;
      height:auto;
      margin-bottom:20px;
    }
    h3 {
      font-size: 36px;
      font-weight:900;
      margin-bottom:10px;
      line-height:38px;
    }
    p {
      font-size:24px;
      line-height:26px;
    }
  }
  .box-employees {
    background: $tertiary-color;
    color:white;
    h3 {
      color: $secondary-color;
    }
  }
  .box-nine {
    background: #f29111;
    color:white;
    h3 {
      color: #8a331d;
    }
  }
  .box-students {
    background: #3a913f;
    color:white;
    h3 {
      color: #004f35;
    }
  }
  .box-patents {
    background: $secondary-color;
    color:white;
    h3 {
      color: $tertiary-color;
    }
  }


</style>
