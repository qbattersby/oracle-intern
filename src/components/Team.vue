<template>
  <div class="resources-page">
    <div class="callout">
      <div class="cloud x1"><img src="../assets/img/cloud1.svg"></div>
      <div class="cloud x2"><img src="../assets/img/cloud2.svg"></div>
      <div class="cloud x3"><img src="../assets/img/cloud3.svg"></div>


      <div class="callout-content grid-container text-center">
        <h1 class="callout-heading">Meet Your Team</h1>
        <div class="callout-copy">
          <p>At Oracle, we win as a team. From mentors to fellow interns,<br class="hide-for-small-only">  get ready to fly with the best. </p>
        </div>
      </div>
    </div>

    <div class="subnav">
      <ul id="team-nav" class="menu align-center" data-smooth-scroll>
        <li><a href="#recruitmentteam">2019 Recruitment Team</a></li>
        <li><a href="#interns">Meet Your Class</a></li>
        <li><a href="#mentors">Meet Your Mentors</a></li>
      </ul>
    </div>


    <section class="gray-bg" id="recruitmentteam">
      <div class="grid-container">
        <div class="grid-x grid-margin-x align-center">
          <div class="cell medium-8 text-center">
            <h3>Meet Your Recruitment Team</h3>
            <p>Feel free to reach out to any of them for help or advice throughout your internship.</p>
          </div>
        </div>
        <div class="class-group">


          <slick ref="slick" :options="slickOptionsClass" @destroy="handleDestroy">

            <div class="slide">
              <div class="card">
                <img src="../assets/img/rachel-blackbourn1.jpg" data-src="../assets/img/rachel-blackbourn2.jpg" v-on:mouseover="hover"
                       v-on:mouseleave="hoverOut">
                <div class="card-section">
                  <h5>Rachel Blackbourn</h5>
                  <p>Marketing Internship Manager</p>
                  <p>University of Wisconsin - Madison</p>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <img src="../assets/img/alex-mandel1.jpg" data-src="../assets/img/alex-mandel2.jpg" v-on:mouseover="hover"
                       v-on:mouseleave="hoverOut">
                <div class="card-section">
                  <h5>Alex Mandel</h5>
                  <p>Marketing Internship Manager</p>
                  <p>Swarthmore College</p>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <img src="../assets/img/rita-franov1.jpg" data-src="../assets/img/rita-franov2.jpg" v-on:mouseover="hover"
                       v-on:mouseleave="hoverOut">
                <div class="card-section">
                  <h5>Rita Franov</h5>
                  <p>Marketing Internship Director</p>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <img src="../assets/img/sarina-price1.jpg" data-src="../assets/img/sarina-price2.jpg" v-on:mouseover="hover"
                     v-on:mouseleave="hoverOut">
                <div class="card-section">
                  <h5>Sarina Price</h5>
                  <p>Marketing Internship Manager</p>
                  <p>Texas Christian University</p>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="card">
                <img src="../assets/img/nathan-bao1.jpg" data-src="../assets/img/nathan-bao2.jpg" v-on:mouseover="hover"
                       v-on:mouseleave="hoverOut">
                <div class="card-section">
                  <h5>Nathan Bao</h5>
                  <p>Marketing Internship Manager</p>
                  <p>American University</p>
                </div>
              </div>
            </div>







          </slick>





        </div>
      </div>

    </section>



    <section class="interns-grid" id="interns">
      <div class="grid-container fluid">
        <div class="grid-x align-stretch">
          <div class="cell small-12 medium-4 large-4 grid-callout dark-bg">
                <div class="grid-callout-copy">
                  <h3>Get Ready to Soar with Your Fellow Interns.</h3>

                  <p>Introducing your Summer 2019 Class! Each of you brings a unique set of skills, backgrounds, and perspectives.</p>
                </div>
          </div>


          <div class="cell small-12 medium-8 large-8">
            <div class="grid-x align-stretch">
              <div class="cell large-3 medium-6 small-12">
                <div class="intern" style="background-image: url(static/ilana-basman.jpg)">
                  <div class="intern-info brand-green">
                    <div class="details">
                      <div class="name">Ilana Basman</div>
                      <div class="school">Boston University</div>
                      <p>Mentor:<br>
                        Sarita Kincaid and Dennis MacNeil
                      </p>

                      <p>Department:<br>
                        Analyst Relations
                      </p>
                      <p>
                        Fun fact: I’ve visited 32 countries!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell large-3 medium-6 small-12">
                <div class="intern" style="background-image: url(static/kaitlyn-nguyen.jpg)">
                  <div class="intern-info brand-green">
                    <div class="details">
                      <div class="name">Kaitlyn Nguyen</div>
                      <div class="school">UC Irvine</div>
                      <p>Mentor:<br> Paul Phillips/Shauna O’Boyle</p>
                      <p>Department:<br> Analyst Relations</p>
                      <p>Fun Fact: I’ve been playing tennis since I was 5!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell large-3 medium-6 small-12">
              <div class="intern" style="background-image: url(static/ben-tarkoff.jpg)">
                <div class="intern-info brand-green">
                  <div class="details">
                    <div class="name">Ben Tarkoff</div>
                    <div class="school">University of Alabama</div>
                    <p>Mentor: <br>Paul Phillips/Shauna O’Boyle</p>
                    <p>Department:<br> Analyst Relations</p>
                    <p>Fun Fact: I was an internet celebrity junior year of high school for the worst shirt to wear on picture day!
                    </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell large-3 medium-6 small-12">
                <div class="intern" style="background-image: url(static/nikky-price.jpg)">
                  <div class="intern-info brand-darkgreen">
                    <div class="details">
                        <div class="name">Nikky Price</div>
                        <div class="school">College of William &amp; Mary</div>
                        <p>Mentor:<br> Paul Phillips</p>
                        <p>Department:<br> Analyst Relations</p>
                        <p>Fun Fact: I learned how to ride a dirt bike at 6 years old!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cell large-3 medium-6 small-12">
                <div class="intern" style="background-image: url(static/max-sickinger.jpg)">
                  <div class="intern-info brand-darkorange">
                    <div class="details">
                      <div class="name">Max Sickinger</div>
                      <div class="school">Claremont McKenna College</div>
                      <p>Mentor:<br> Chip Woerner</p>
                      <p>Department:<br> Corporate Marketing</p>
                      <p>Fun fact: I’m Swiss but speak Spanish! </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cell large-6 medium-6 small-12">
                <div class="quote brand-burgundy">
                  <div class="quote-info">
                    <div class="details">
                      <p>Be polite and follow up as much as possible. As an intern, you will be remembered for not only the work you do, but also the type of person you are.</p>
                      <p><strong>Travis Pillon</strong><br>
                        Intern Class of 2015</p>
                    </div>
                  </div>
                </div>
              </div>


              <div class="cell large-3 medium-6 small-12">
                <div class="intern" style="background-image: url(static/jalyn-hayes.jpg)">
                  <div class="intern-info brand-darkorange">
                    <div class="details">
                      <div class="name">Jalyn Hayes</div>
                      <div class="school">CSU San Bernardino</div>
                      <p>Mentor:<br> Chip Woerner</p>
                      <p>Department:<br> Corporate Marketing</p>
                      <p>Fun fact: I taught myself ASL in 7th grade! </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>



          <div class="cell medium-4 large-2 small-12">
            <div class="intern" style="background-image: url(static/tyler-wang.jpg)">
              <div class="intern-info brand-darkgreen">
                <div class="details">
                    <div class="name">Tyler Wang</div>
                    <div class="school">UC Berkeley</div>
                    <p>Mentor:<br> Ali Ordoubadi</p>
                    <p>Department:<br> Customer Visit Center</p>
                    <p>Fun Fact: I love Boba!</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-4 large-2 small-12">
            <div class="intern" style="background-image: url(static/sneha-pandey.jpg)">
              <div class="intern-info brand-darkblue">
                <div class="details">

                    <div class="name">Sneha Pandey</div>
                    <div class="school">Purdue University</div>
                    <p>Mentor:<br> Margo Davis</p>
                    <p>Department:<br> Events Marketing - 3rd Party Partner</p>
                    <p>Fun Fact: I mix music in my free time!</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-4 large-2 small-12">
                <div class="intern" style="background-image: url(static/parker-carroway.jpg)">
                  <div class="intern-info brand-blue">
                    <div class="details">
                      <div class="name">Parker Carroway</div>
                      <div class="school">University of Oklahoma</div>
                      <p>Mentor:<br>
                        Julian Edwards
                      </p>

                      <p>Department:<br>
                        Event Marketing
                      </p>
                      <p>
                        Fun fact: I’m obsessed with discovering music!
                      </p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-4 large-2 small-12">
            <div class="intern" style="background-image: url(static/sophia-donovan.jpg)">
              <div class="intern-info brand-darkgreen">
                <div class="details">
                    <div class="name">Sophia Donovan</div>
                    <div class="school">University of Southern California</div>
                    <p>Mentor:<br> Travis O’Hara</p>
                    <p>Department:<br> Global Events</p>
                    <p>Fun Fact: I’m adopted!</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-4 large-2 small-12">
            <div class="intern" style="background-image: url(static/thomas-mcandrews.jpg)">
              <div class="intern-info brand-darkblue">
                <div class="details">
                  <div class="name">
                    Thomas McAndrews
                  </div>
                  <div class="school">
                    Santa Clara University
                  </div>
                  <p>
                    Mentor:<br> Travis O’Hara
                  </p>

                  <p>Department:<br> Global Events</p>
                  <p>Fun Fact: I like to sing!</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-4 large-2 small-12">
            <div class="intern" style="background-image: url(static/janani-jayesh.jpg)">
              <div class="intern-info brand-darkorange">
                <div class="details">
                    <div class="name">Janani Jayesh</div>
                    <div class="school">UC Los Angeles</div>
                    <p>Mentor:<br> Sonang Kim</p>
                    <p>Department:<br> Global Customer Programs (GCP)</p>
                    <p>Fun Fact: I played the drums in school!</p>
                </div>
              </div>
            </div>
          </div>


          <div class="cell medium-8 large-6 small-12">
            <div class="quote brand-green">
              <div class="quote-info">
                <div class="details">
                  <p>Don’t be afraid to ask questions. This is the time to learn, so find someone that can help you grow. Step out of your comfort zone and embrace projects that will teach you something new. Most importantly, remember that the mentors care about making sure you succeed and have the best experience possible.</p>
                  <p><strong>Alicia Breyer</strong><br>
                    Intern Class of 2016</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-4 large-2 small-12">
            <div class="intern" style="background-image: url(static/louis-siegler.jpg)">
              <div class="intern-info brand-darkgreen">
                <div class="details">
                  <div class="name">Louis Siegler</div>
                    <div class="school">Yale University</div>
                    <p>Mentor:<br> Sonang Kim</p>
                    <p>Department:<br> Global Customer Programs</p>
                    <p>Fun Fact: I am a tennis player!</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-4 large-2 small-12">
                <div class="intern" style="background-image: url(static/anne-pacholski.jpg)">
                  <div class="intern-info brand-darkorange">
                    <div class="details">
                      <div class="name">Anne Pacholski</div>
                      <div class="school">Indiana University</div>
                      <p>Mentor:<br>
                        Sonang Kim
                      </p>

                      <p>Department:<br>
                        Global Customer Programs (GCP)
                      </p>
                      <p>
                        Fun fact: I won a car my freshman year of high school in a raffle!
                      </p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-4 large-2 small-12">
            <div class="intern" style="background-image: url(static/tyler-rosselli.jpg)">
              <div class="intern-info brand-darkgreen">
                <div class="details">
                    <div class="name">Tyler Rosselli</div>
                    <div class="school">University of Southern California</div>
                    <p>Mentor:<br> Willie Lee</p>
                    <p>Department:<br> Marketing Operations</p>
                    <p>Fun Fact: I’m left-handed!</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-4 large-2 small-12">
            <div class="intern" style="background-image: url(static/sarah-ali.jpg)">
              <div class="intern-info brand-darkgreen">
                <div class="details">
                    <div class="name">Sarah Ali</div>
                    <div class="school">Duke University</div>
                    <p>Mentor:<br> Celina Bertallee</p>
                    <p>Department:<br> Public Relations</p>
                    <p>Fun Fact: I once caught a spy while working on a political campaign!</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-4 large-2 small-12">
            <div class="intern" style="background-image: url(static/emily-dutton.jpg)">
              <div class="intern-info brand-darkgreen">
                <div class="details">
                  <div class="name">Emily Dutton</div>
                  <div class="school">Wake Forest University</div>
                  <p>Mentor:<br> Danielle Tarp</p>
                  <p>Department:<br> Public Relations</p>
                  <p>Fun Fact: I was hospitalized because an avocado shell got lodged in my throat while eating a taco - I’m very accident prone!</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-4 large-2 small-12">
            <div class="intern" style="background-image: url(static/abbie-schulz.jpg)">
              <div class="intern-info brand-darkblue">
                <div class="details">
                 <div class="name">Abbie Schulz</div>
                    <div class="school">Santa Clara University</div>
                    <p>Mentor:<br> Kris Reeves</p>
                    <p>Department:<br> Public Relations</p>
                    <p>Fun Fact: I have traveled to Cuba!</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-4 large-2 small-12">
            <div class="intern" style="background-image: url(static/olivia-nelson.jpg)">
              <div class="intern-info brand-green">
                <div class="details">
                    <div class="name">Olivia Nelson</div>
                    <div class="school">Cal Poly SLO</div>
                    <p>Mentor:<br> Carol Sato</p>
                    <p>Department:<br> Public Relations</p>
                    <p>Fun Fact: I run an Etsy shop where I sell my hand lettered artwork!</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-4 large-2 small-12">
                <div class="intern" style="background-image: url(static/danny-weinreb.jpg)">
                  <div class="intern-info brand-darkblue">
                    <div class="details">
                      <div class="name">Danny Weinreb</div>
                      <div class="school">Indiana University</div>
                      <p>Mentor:<br>
                        Lisa Marcyes
                      </p>

                      <p>Department:<br>
                        Social Media
                      </p>
                      <p>
                        Fun fact: I love sports!
                      </p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell medium-4 large-2 small-12">
            <div class="intern" style="background-image: url(static/kenan-kitchen.jpg)">
              <div class="intern-info brand-darkgreen">
                <div class="details">
                  <div class="name">Kenan Kitchen</div>
                  <div class="school">Georgetown University</div>
                  <p>Mentor:<br>
                    Jason Williamson
                  </p>

                  <p>Department:<br>
                    Startup Ecosystem
                  </p>
                  <p>
                    Fun fact: I have been to 27 countries!
                  </p>
                </div>
              </div>
            </div>
          </div>




        </div>
      </div>
    </section>



    <section class="team-footer" id="mentors">
        <div class="grid-container">
        <div class="grid-x grid-margin-x align-center">
          <div class="cell medium-8 text-center">
        <h2>Meet Your Mentors</h2>
        <p>Your mentors have the knowledge and experience to share and are committed to making your intern experience the best ever.</p>
        </div>
        </div>
          <div class="mentor-group">

            <slick ref="slick" :options="slickOptions">

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/Shauna-green-double.jpg">
                  <div class="card-section">
                    <h5>Shauna O’Boyle</h5>
                    <p>Analyst Relations</p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/Paul-orange-double.jpg">
                  <div class="card-section">
                    <h5>Paul Phillips</h5>
                    <p>Analyst Relations</p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/Dennis-darkblue-double.jpg">
                  <div class="card-section">
                    <h5>Dennis MacNeil</h5>
                    <p>Analyst Relations</p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/chip-woerner.jpg">
                  <div class="card-section">
                    <h5>Chip Woerner</h5>
                    <p>Corporate Marketing</p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/ali-ordouadi.jpg">
                  <div class="card-section">
                    <h5>Ali Ordoubadi</h5>
                    <p>Customer Visit Center</p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/travis-ohara.jpg">
                  <div class="card-section">
                    <h5>Travis O’Hara</h5>
                    <p>Global Events</p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/julian-edwards.jpg">
                  <div class="card-section">
                    <h5>Julian Edwards</h5>
                    <p>Events Marketing</p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/Margo-pink-double.jpg">
                  <div class="card-section">
                    <h5>Margo Davis</h5>
                    <p>Events Marketing - 3rd Party Partner</p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/Sonang-blue-double.jpg">
                  <div class="card-section">
                    <h5>Sonang Kim</h5>
                    <p>Global Customer Programs</p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/carol-sato.jpg">
                  <div class="card-section">
                    <h5>Carol Sato</h5>
                    <p>Public Relations</p>
                  </div>
                </div>
              </div>


              <div class="slide">
                <div class="card">
                  <img src="../assets/img/celina-bertallee.jpg">
                  <div class="card-section">
                    <h5>Celina Bertallee</h5>
                    <p>Public Relations</p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/Danielle-pink-double.jpg">
                  <div class="card-section">
                    <h5>Danielle Tarp</h5>
                    <p>Public Relations</p>
                  </div>
                </div>
              </div>


              <div class="slide">
                <div class="card">
                  <img src="../assets/img/Kris-pink-double.jpg">
                  <div class="card-section">
                    <h5>Kris Reeves</h5>
                    <p>Public Relations</p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/willie-lee.jpg">
                  <div class="card-section">
                    <h5>Willie Lee</h5>
                    <p>Marketing Operations</p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="card">
                  <img src="../assets/img/lisa-marcyes.jpg">
                  <div class="card-section">
                    <h5>Lisa Marcyes</h5>
                    <p>Social Media</p>
                  </div>
                </div>
              </div>

            </slick>

          </div>
      </div>
    </section>

  </div>
</template>

<script>
  import Slick from 'vue-slick';

  export default {
    name: 'team',
    components: { Slick },
    mounted() {
      this.scroll = new Foundation.SmoothScroll($('#team-nav'));
    },
    methods: {
      hover(event) {
        const targetImage = event.target;
        const source = targetImage.src;
        const newSource = targetImage.dataset.src;

        targetImage.src = newSource;
        targetImage.dataset.src = source;
      },
      hoverOut(event) {
        const targetImage = event.target;
        const source = targetImage.src;
        const newSource = targetImage.dataset.src;

        targetImage.src = newSource;
        targetImage.dataset.src = source;
      },
      handleDestroy(event) {
        // eslint-disable-next-line
        event.target.style = "opacity: 0";
      },
    },
    data() {
      return {
        msg: '',
        slickOptions: {
          slidesToShow: 4,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                dots: false,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 1000,
              settings: {
                arrows: false,
                dots: false,
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                dots: false,
                slidesToShow: 1,
              },
            },
          ],
        },
        slickOptionsClass: {
          slidesToShow: 5,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                dots: false,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 1000,
              settings: {
                arrows: false,
                dots: false,
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                dots: false,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 2000,
              },
            },
          ],
        },
      };
    },
};
</script>


<style lang="scss" scoped>

/* gross */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
   .card img {
     height:220px;
   }
  }


  .callout {
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 23.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1662.5 794.4' style='enable-background:new 0 0 1662.5 794.4;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bclip-path:url(%23SVGID_2_);fill:%23BDE6EE;%7D .st1%7Bopacity:0.23;clip-path:url(%23SVGID_2_);fill:%2300758F;enable-background:new ;%7D .st2%7Bclip-path:url(%23SVGID_2_);fill:%237FBAC7;%7D .st3%7Bclip-path:url(%23SVGID_2_);fill:%239E0A11;%7D .st4%7Bclip-path:url(%23SVGID_2_);fill:none;stroke:%239E0A11;stroke-width:5.28;stroke-miterlimit:10;%7D .st5%7Bclip-path:url(%23SVGID_2_);fill:%23F80000;%7D .st6%7Bclip-path:url(%23SVGID_2_);fill:%236C2C45;%7D .st7%7Bclip-path:url(%23SVGID_2_);fill:none;stroke:%23F80000;stroke-width:5.28;stroke-miterlimit:10;%7D .st8%7Bclip-path:url(%23SVGID_2_);fill:%230E321F;%7D .st9%7Bclip-path:url(%23SVGID_2_);fill:%231E5623;%7D .st10%7Bclip-path:url(%23SVGID_2_);fill:%2377180B;%7D .st11%7Bclip-path:url(%23SVGID_2_);fill:%233F0005;%7D .st12%7Bclip-path:url(%23SVGID_2_);fill:%23143825;%7D%0A%3C/style%3E%3Ctitle%3Eteam-bg%3C/title%3E%3Cg%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_1_' x='-14.8' width='1680.3' height='800.8'/%3E%3C/defs%3E%3CclipPath id='SVGID_2_'%3E%3Cuse xlink:href='%23SVGID_1_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Crect x='323.5' y='-495.1' transform='matrix(1.919854e-03 -1 1 1.919854e-03 478.9298 1175.1091)' class='st0' width='1009.3' height='1685.4'/%3E%3Cpath class='st1' d='M-19.1,804.3c0,0,202.2-65.2,281-59.1c82,6.3,155.4,67.6,155.4,67.6s27.9,0.1,60.4-16.1 c0,0,158-89.5,203.6-79.3c45.6,10.2,310.8,119.7,310.8,119.7v19.3l-1010.6-1.9L-19.1,804.3z'/%3E%3Cpath class='st2' d='M1001,702.8L1001,702.8 M1113.4,584.6l-10.6,122.3h-5.7V699h-9.9v7.3h-13.5v16.9h-7.8l-0.1,4.2h-8.6 l-1.6-38.1l-11.9-4v-18l-9.3-9l-2-36.1l-2.7,36.7l-8.3,8.4v19.2l-9,4.2l-0.7,22.2l-3.9,0.1l-0.5-10.2h-6.2 c0.3,0.3,0.2,38.6-0.1,91.5l-19.1-0.6l-0.6-2H969v2.6h-10.1l-0.1,35H938l0.1-75l-30.4-0.1l-1.3,68.4H880l0.2-107.5l-52-0.2 L827.6,882l-26-0.2l0.2-86.8l-53.5-0.1l-0.2,86.6l-20-0.1l0.1-50.9l-31.2-0.1l-0.2,50.6l-13.4-0.1l0.1-48.5l-40.4-0.1l0.1-41.7 h-28.6v16.3h-17V817H586v-13.9h-7.7v-13.2h-15.5v25.5h-7.7v-18.6h-9.3v19.3H528v-13.9h-13.9V789h-24.8v13.2H463v4.7h-10.8v9.3H436 v-21.7l-34.1-0.5v20.1l-53.4-0.1v8.5h-20.1v-16.3h-16.2V823h-22.4v-16.3h-12.4V823h-13.9v-27.1h-14.7V823h-7.7l0.1-39.5h-20.1 l-0.1,31.7h-18v-9.3l-68.9-0.1v9.3h-10v6.2l-81.3-0.2v-15.5H21.2v15.5h-17v-15.5H-8.2v14.7h-8.5l-0.4,174l461.5,0.9l-2.5,66.6 l557.3-15.8c-0.3,37.3-0.5,62.2-0.5,62.2l670.8-6.7l-2.3-87l0.6-337.6h-14.5v-13l-43.6-8l0.1-29.3h-15.1v10.7H1577V630h-11.9v7.3 h-6.2v20.9l-63.4-0.1v21.4h-23.9v23.1h-7.3l0.1-38.9h-22.8l-31.2,14v-6.9h-14.5l-0.2-13.2h-13.8L1380,629l-1.3,28.8h-11.4V673 h-4.2v19.7h-6.8v-13.5h-21.8v16.3h-20.3l0.2-96.3l-9.3,0.1l0.1-9.3h-30.1l-0.2,8.9l-8.8,0.2l-0.2,125.7h-25.6l0.2-5.6l-28-0.1V736 h-19.2l0.1-60.3h-9.3v-4.5h-11.4l0.1,4l-22.4-0.2l-0.3,66.4H1133L1113.4,584.6'/%3E%3Cpath class='st3' d='M637.8,625.4c0-1.2,2.3-2.3,4.4-1.8l0,0c1.2,0.2,2.1,0.9,2.1,1.8l-0.1,78.4h-6.5L637.8,625.4z'/%3E%3Cpolygon class='st3' points='684.3,638.4 690.6,639.8 690.5,703.9 684.2,703.9 '/%3E%3Cpolygon class='st3' points='898.3,623.8 902.7,623.3 902.6,706.1 896.1,706 896.2,623.8 '/%3E%3Cpolygon class='st3' points='854.5,637.8 861,638 860.8,706 854.3,706 '/%3E%3Cpolygon class='st3' points='814.6,644.8 821,645 820.9,705.9 814.5,705.9 '/%3E%3Cpolygon class='st3' points='771.6,648.2 778.2,649.1 778.1,704.1 771.5,704.1 '/%3E%3Cpolygon class='st3' points='727.6,645.5 734.1,646.4 734,704 727.5,704 '/%3E%3Cpolygon class='st3' points='936.2,619.1 942.6,618.4 942.4,708.4 936,708.4 '/%3E%3Cpolygon class='st3' points='977.8,596.6 984.3,595.8 984.1,708.5 977.6,708.5 '/%3E%3Cpolygon class='st3' points='1020.1,577.2 1026.1,574.7 1025.9,708.6 1019.9,708.6 '/%3E%3Cpolygon class='st3' points='1066.7,546.8 1072,543.1 1071.7,708.7 1066.4,708.7 '/%3E%3Cpolygon class='st3' points='1111.3,516.2 1116.9,512.3 1116.6,708.7 1110.9,708.7 '/%3E%3Cpolygon class='st3' points='1158.4,479.8 1164.6,474.6 1164.1,707.6 1158,708.8 '/%3E%3Cpolygon class='st3' points='1205.2,435 1204.7,707.7 1198.5,708.9 1199,442.6 '/%3E%3Cpath class='st4' d='M1289,343.6c0,0-333.7,439.7-698.9,262.9'/%3E%3Cpath class='st3' d='M597.7,613.4l25,10.4l24.6,8.3l35.2,6.2l-61.4-22.5l-24.6-11.5L571,593.5l-42.6-20.9l-24.3-12.2L469.4,542 l-51.5-31.3l-22-13.6l-18.1-12.5l-31.5-21.9L324.5,447l-25-20.7l-25.5-21l-27.7-24.2L226,361.5l-29.4-28.6v8.5l8.4,8.5l-0.7,356.3 h5.3l0.6-351l11.2,11.2l22.7,21.3l4,3.5l-0.5,268.4h-9.7l-9.7,2.5l-5.1,17.8v19.2h24.5v4.3h5.3v-4.2l37.5,0.1v4.2h5.3v-4.2l38,0.1 v4.2h5.3v-4.1l38,0.1v4.2h5.3v-4.2l29.9,0.1v-4.8l-3.2-4.8l-3.2-1.4l-16.9-0.6l-2.2-3.9l-4.6-2l0.4-185.5l1.6,1.1l35,22.3 l-0.4,183.6h5.3l0.3-180.7l28.9,17.1l9.1,5.3L462,688.2l-20.8,1.4l-3.2,6.2v3.7h24v5.3h5.3v-5.3l38,0.1v6.7h5.3v-6.7h6.2v-8.3 l-6.2-1.6l0.2-118.2l6.3,3.4l20.9,10.8l10,4.9l-0.2,80.1H543l-0.1,30.3h4.8v4.2h5.3V701l37.5-0.5v4.8h5.3v-4.8l31.5-0.3v-11.8 l-7.4-2.1l-10.2-15.2h-13.9l0.1-58.1L597.7,613.4z M253.1,659.8l0.5-263.7l27.6,24.7l10.4,8.3l-0.4,230.7H253.1z M334.3,659.8 l-38-0.1l0.4-226.5l11.1,9l26.9,19.8l-0.4,198V659.8z M348.9,682.7l0.1-20.3l-3.4-2.5h-6l0.4-194.1l2.1,1.6l25.2,18l10.5,7.6 l-0.4,189.4L348.9,682.7z M498,683.5l-30.5-0.1l0.3-134.6l8.3,4.8l29.7,15.6l-0.2,119.6L498,683.5z M553.7,671.1l0.2-77.5 l17.6,8.5l19.9,8.7l-0.1,60.4L553.7,671.1z'/%3E%3Cpath class='st3' d='M60.6,190.5c3.7-5.8,14.7-23.2,14.7-23.2v10.8c0,0-5.1,10-12.6,21.3c-9.9,15.1-23.3,33.2-29.5,42 c-0.7,0.9-1.4,1.9-2.3,3.2l-0.8,449.1h-7l0.8-439.8c-6.2,8.1-13.3,17-17.9,22.3S-13.4,298-13.4,298v-10.6c0,0,14.6-16.7,19.4-22.5 c6.9-8.3,19.8-25.1,26.1-33.8C39.5,221.1,53.5,200.8,60.6,190.5z'/%3E%3Cpolygon class='st3' points='52.8,676.1 66.4,676.2 66.3,693.9 32.9,693.9 32.9,684.6 44.9,684.6 '/%3E%3Cpath class='st3' d='M165.3,149.5v11.8l-59.4-0.1v-11.8h-9.7v-11.8H84.9v11.8h-9.7l-0.3,136H71l-0.3,143h-4.6L66,574.2h-6.2 l-0.7,348.6l58.1,0.1l0.6-312.5l31.7,0.1l-0.6,312.6h25.4l0.9-494.6h3.3l0.5-279L165.3,149.5L165.3,149.5z M105.3,285.5l0.2-94.9 l59.3,0.1l-0.2,94.9h-3.9v11.3l-52.5-0.1v-11.3H105.3L105.3,285.5z M152.8,574.3h-3.3v9.7l-31.7-0.1v-9.7h-5.1L113,468l40.2,0.1 L152.8,574.3z M153.1,428.5v11.1l-40-0.1v-11.1H108l0.2-103.9l52.5,0.1l-0.2,103.9H153.1z'/%3E%3Cpolygon class='st5' points='206.9,573.9 206.3,923 174.4,922.9 175,583.9 175,573.8 175.3,429.1 179.5,429.1 179.8,289.6 178.6,289.6 178.8,155.7 173,155.7 173,137.6 184.8,137.6 184.8,149.4 193.6,149.4 193.4,285 196.9,285 196.6,429.1 202.4,429.1 202.2,573.9 '/%3E%3Cpath class='st5' d='M153.9,200.4c3-4.6,11.3-18.6,11.3-18.6v9c0,0-5.5,10.2-7.4,13.5c-6.4,10.4-20.1,29.9-27.7,39.9h0.2 l-0.8,451.3h-7l0.8-442.3c-7.4,9.5-17,21.6-22.6,28.5c-3.9,4.8-9.7,11.6-15.9,18.6h1.6l-0.8,395.1h-7l0.7-388.9 c-7.1,8.1-14,15.8-18.9,20.9c-4.4,4.5-10.8,10.9-17.5,17.4H44l-0.7,349.1h-6.2l0.6-344.2c-8.1,7.7-16.1,15.3-21.5,20.4 c-3.4,3-9.9,8.8-15.9,14.1l-0.6,316.7h-7l0.6-310.5c-3.9,3.3-6.7,5.8-6.7,5.8v-8.5c0,0,20.1-17.3,26.6-23.2 c10.4-9.7,30-29.9,39.7-40.1c8.3-8.8,24.9-26.4,32.8-35.5c8.8-10.4,25.8-31.6,33.9-42.4C128.3,235.1,145.6,212.2,153.9,200.4z'/%3E%3Cpath class='st5' d='M639.3,574.7c0,0-8.6-4.2-16.7-8.3l-0.3,135.3h-7l0.3-138.6c-1.4-0.7-2.6-1.4-3.7-2 c-7.6-3.9-20.6-10.6-30.8-16.3l-0.3,157.5h-7l0.3-161.2c-0.9-0.5-1.8-1.1-2.5-1.4c-4.8-2.8-19.9-12.2-33.1-20.3l-0.3,182.1h-7 l0.3-186.5c-7.2-4.4-13-8-14.8-9c-5.3-3.2-14.8-9.2-21.3-13.4L495,702.7h-7l0.4-214.7c-10.2-6.9-25.5-17.3-35.9-24.9l-0.4,240.1 h-7l0.5-245.4c-9.7-7.6-25.3-20.8-35.5-29.3l-0.5,271.6h-7L403,423h0.4c-9.8-8-25-20-35.9-29.1L366.8,700h-7l0.6-312.1 c-8.8-7.9-24.8-24.9-33.2-33.2c-1-1-2.3-2.3-3.7-3.5l-0.6,347.7h-7l0.6-354h0.2c-4.6-4.4-9.3-9-12.3-12.2 c-6.2-6.5-17.1-17.5-23-24.2l-0.7,386.4h-7l0.7-394.4c-5.5-6.5-12-14.6-15.6-18.9c-5.1-6-13.7-16-19.9-23.6L238,694.8h-7l0.8-446 c-4.2-5.8-9.7-13.9-12.5-17.8c-7-9.7-25.8-40-25.8-40v-11.3c0,0,26.2,40.6,35.5,53.6c4.2,5.6,13,16.8,17.4,22.2 c6.9,8.6,20.9,25.6,27.9,33.9c7.7,9,23.2,27,31.3,35.6c6.2,6.5,18.8,19.2,25.3,25.6c4.6,4.6,13.9,13.2,18.6,17.5 c5.3,4.8,15.5,14.3,20.8,19.1c10.5,9.4,31.8,27.7,42.7,36.5c8.4,6.7,25.7,19.8,34.3,26.3c9.3,6.9,28.1,20.7,37.6,27.2 c8.8,6,26.2,17.7,35.2,23.3c12.7,8,38,23.1,50.8,30.6c8.1,4.6,24.1,13.8,32.2,18.2c46.8,25.6,103.5,46.9,103.5,46.9L639.3,574.7z' /%3E%3Cpath class='st5' d='M142.4,705.4h6.9v-12.2l-163.4-0.3v13.2l14.8,16.4h-14.8v12.2l163.4,0.3v-22.5l-6.9,7.4V705.4L142.4,705.4z M124.4,722.8h-12.5V710L124.4,722.8z M102.7,722.8H90.2l12.5-12.8V722.8z M95,705.2l-13.8,13.6v-13.7L95,705.2z M72.1,705.1v12.3 L59.9,705L72.1,705.1z M64.5,722.7H51.1V709L64.5,722.7z M41.8,722.4H29.3l12.5-12.7V722.4z M33.9,705l-13.8,13.9V705H33.9z M10.9,705v13.2l-12.6-13.3L10.9,705z M133.7,719.3l-13.9-14.1h13.9V719.3z'/%3E%3Crect x='1152.9' y='550.3' transform='matrix(1.919869e-03 -1 1 1.919869e-03 754.2651 1857.452)' class='st6' width='309.5' height='1.2'/%3E%3Cpath class='st3' d='M1637.9,647.9l17.3,7.3l11.6,4.3v-5.3l-12.7-4.6l-17.1-8l-17.8-7.6l-29.6-14.5l-16.9-8.5l-23.9-12.9 l-35.9-21.7l-15.3-9.4l-12.7-8.7l-21.8-15.2l-15.1-11l-17.4-14.5L1413,503l-19.3-16.8l-14.1-13.6l-20.4-19.9v5.8l5.8,5.8 l-0.5,247.5h3.7l0.4-243.8l7.9,7.9l15.7,14.8l2.8,2.5l-0.3,186.4h-6.7l-6.7,1.8l-3.6,12.5v13.4h16.9v3h3.7v-3h26.4v3h3.7v-3h26.4 v3h3.7v-3l26.4,0.1v3h3.7v-3h20.8V704l-2.1-3.3l-2.1-1.1l-11.8-0.2l-1.6-2.8l-3.2-1.4l0.2-128.9l1.1,0.7l24.3,15.4l-0.3,128.1h3.2 l0.2-125.4l20.1,12l6.3,3.7l-0.2,99.2l-14.4,1l-2.1,4.2v2.5h16.6v3.7h3.7v-3.7h26.4v4.9h3.7v-4.8h4.2V702l-4.2-1.1l0.2-82.1 l4.4,2.3l14.6,7.6l7,3.3l-0.1,55.7h-3.3v21h3.3v2.8h3.7v-3l26.1-0.3v3.3h3.7v-3.3l21.8-0.3v-8.3l-5.1-1.4l-7-10.6h-9.7l0.1-40.3 L1637.9,647.9z M1425.2,679.5h-26.4l0.3-183l19.2,17.1l7.2,5.8l-0.3,160.3L1425.2,679.5z M1428.7,679.7l0.3-157.3l7.7,6.2 l18.6,13.8l-0.3,137.4L1428.7,679.7z M1465,695.6v-14.1l-2.3-1.8h-4.1l0.3-134.7l1.6,1.1l17.4,12.5l7.4,5.3l-0.2,131.4L1465,695.6 z M1568.9,695.8h-21.1l0.2-93.4l5.8,3.3l20.6,10.8l-0.2,83.1L1568.9,695.8z M1607.5,687.4l0.1-53.9l12.3,6l13.7,6l-0.1,41.9 H1607.5z'/%3E%3Cpolyline class='st3' points='1244.5,394.9 1243.9,707 1239,707 1239.6,401.6 '/%3E%3Cpolygon class='st3' points='1259.6,694.7 1269.1,694.8 1269.1,707.1 1245.9,707 1245.9,700.5 1254.2,700.5 '/%3E%3Cpath class='st3' d='M1337.6,329.1v8.3l-41.2-0.1V329h-6.5v-8.3h-7.9v8.3h-6.7l-0.2,94.6h-2.7l-0.2,99.2h-3.2l-0.2,101.2h-4.2 l-0.4,242l40.3,0.1l0.4-217h22l-0.4,217h17.6l0.6-343.3h2.3l0.4-193.8L1337.6,329.1z M1296.4,357.5l41.4,0.1l-0.1,65.9h-2.8v7.9 l-36.6-0.1v-7.9h-1.9V357.5z M1329.4,624.1h-2.3v6.7h-22v-6.7h-3.5l0.1-73.8l27.8,0.1L1329.4,624.1z M1329.5,522.8v7.6h-27.8v-7.6 h-3.5l0.1-72.2l36.5,0.1l-0.1,72.2L1329.5,522.8z'/%3E%3Cpolygon class='st5' points='1366.7,623.6 1366.2,866.1 1344,866.1 1344.5,630.6 1344.5,623.6 1344.7,523.2 1347.8,523.2 1348,426.3 1347.1,426.3 1347.3,333.3 1343.1,333.3 1343.1,320.8 1351.4,320.8 1351.4,328.9 1357.5,328.9 1357.4,423.1 1359.6,423.1 1359.5,523.2 1363.5,523.2 1363.3,623.6 '/%3E%3Cpath class='st5' d='M1329.8,364.3c2.1-3,7.9-12.8,7.9-12.8v6.3c0,0-3.7,7-5.1,9.3c-4.4,7-14,20.6-19.3,27.6h0.2l-0.6,313.4h-4.9 l0.6-307.2c-5.1,6.7-11.8,15.1-15.7,19.9c-2.8,3.3-6.9,8.1-11.1,13h1.1l-0.5,274.2h-4.9l0.5-270c-4.8,5.5-9.7,10.9-13.1,14.4 c-3,3.2-7.4,7.6-12.2,12.1h0.7L1253,707h-4.2l0.4-239c-5.6,5.3-11.3,10.5-15,14.1c-2.3,2.3-6.7,6.2-10.9,9.8l-0.4,219.6h-4.9 l0.4-215.6c-2.7,2.5-4.6,4-4.6,4v-5.8c0,0,14.1-11.8,18.5-16c7.2-6.7,20.8-20.8,27.5-27.8c5.7-6,17.3-18.3,22.8-24.6 c6.2-7.2,18-21.8,23.7-29.4C1312.2,388.5,1324.2,372.5,1329.8,364.3z'/%3E%3Cpath class='st5' d='M1667.3,619.1v5.3l-11.6-5.8l-0.2,93.9h-4.9l0.2-95.6c-0.9-0.3-1.8-0.8-2.6-1.2c-5.1-2.8-14.3-7.4-21.3-11.3 l-0.2,104.3h-4.9l0.2-107.1c-0.6-0.3-1.2-0.7-1.8-1.1c-3.3-1.9-13.9-8.5-23-14.1l-0.2,122h-4.8l0.2-125.1 c-5.1-3.2-9.2-5.7-10.4-6.4c-3.7-2.3-10.2-6.4-14.8-9.4l-0.3,140.5h-4.9l0.3-143.9c-7-4.8-17.8-12-25-17.3l-0.3,161h-4.8 l0.3-164.7c-6.7-5.1-17.6-14.5-24.6-20.3l-0.3,184.9h-4.9l0.3-188.6h0.2c-6.9-5.7-17.4-13.9-25-20.3l-0.4,208.9h-4.8l0.4-213.1 c-6-5.5-17.2-17.3-23-22.9c-0.9-0.8-1.8-1.6-2.6-2.5l-0.4,238.5h-4.3l0.4-242.9h0.2c-3.3-3.2-6.5-6.3-8.6-8.5 c-4.2-4.4-12-12.2-16-16.8l-0.5,268.2h-4.9l0.5-273.9c-3.9-4.8-8.4-10.2-10.9-13.2c-3.7-4.2-9.7-11.1-13.9-16.4l-0.6,303.5h-4.9 l0.6-309.6c-2.8-4.1-6.7-9.7-8.6-12.3c-4.9-6.7-17.9-27.9-17.9-27.9V350c0,0,18.1,28.2,24.6,37.2c2.8,4.1,9,11.6,12,15.5 c4.7,6,14.4,17.6,19.3,23.5c5.3,6.2,16,18.7,21.6,24.7c4.2,4.6,13,13.4,17.6,17.8c3.2,3,9.7,9,12.8,12 c3.7,3.3,10.7,10.1,14.4,13.2c7.4,6.5,22.2,19.2,29.7,25.4c5.8,4.8,17.8,14,23.8,18.4c6.5,4.8,19.5,14.3,26.2,18.9 c6.2,4.2,18.3,12.4,24.4,16.3c8.6,5.5,26.4,16.1,35.2,21.2c5.6,3.4,16.7,9.7,22.3,12.7c6.3,3.2,25.3,12.4,25.3,12.4L1667.3,619.1z '/%3E%3Cpath class='st5' d='M1369.6,715v-8.5l-113.4-0.2v9.2l10.2,11.5h-10.2v8.5l113.4,0.2V720l-4.8,5.1v-10L1369.6,715z M1352.5,727.1 h-8.8v-9L1352.5,727.1z M1337.4,727.1h-8.8l8.8-9V727.1z M1331.9,714.9l-9.5,9.5v-9.5H1331.9z M1316.1,714.9v8.6l-8.4-8.6H1316.1z M1310.8,727.1h-9.3v-9.5L1310.8,727.1z M1294.9,727.1h-8.6l8.7-8.8L1294.9,727.1z M1289.5,714.9l-9.5,9.7v-9.7H1289.5z M1273.5,714.9v9.2l-8.6-9.2H1273.5z M1358.9,724.8l-9.7-9.7h9.7V724.8z'/%3E%3Crect x='1394.5' y='702.4' transform='matrix(1.919869e-03 -1 1 1.919869e-03 690.2853 2099.9407)' class='st5' width='5.3' height='3.5'/%3E%3Crect x='1424' y='702.7' transform='matrix(1.919869e-03 -1 1 1.919869e-03 719.6662 2130.2046)' class='st5' width='6' height='3.7'/%3E%3Crect x='1454.4' y='702.5' transform='matrix(1.919869e-03 -1 1 1.919869e-03 749.929 2160.1104)' class='st5' width='5.3' height='3.7'/%3E%3Crect x='1484.3' y='702.5' transform='matrix(1.919869e-03 -1 1 1.919869e-03 779.7917 2189.9851)' class='st5' width='5.3' height='3.7'/%3E%3Crect x='1514' y='702' transform='matrix(1.919869e-03 -1 1 1.919869e-03 809.3375 2218.6877)' class='st5' width='4.2' height='3.7'/%3E%3Crect x='1543.3' y='703.1' transform='matrix(1.919869e-03 -1 1 1.919869e-03 838.4562 2249.6113)' class='st5' width='5.8' height='3.3'/%3E%3Crect x='1573.1' y='703' transform='matrix(1.919869e-03 -1 1 1.919869e-03 868.2385 2279.5964)' class='st5' width='6' height='3.7'/%3E%3Crect x='1603' y='703.2' transform='matrix(1.919869e-03 -1 1 1.919869e-03 897.9214 2309.4399)' class='st5' width='5.8' height='3.3'/%3E%3Crect x='1632.5' y='703.1' transform='matrix(1.919869e-03 -1 1 1.919869e-03 927.2646 2338.9629)' class='st5' width='5.8' height='3.7'/%3E%3Cpath class='st5' d='M1655.4,715.6h4.4v-8.5l-300.5-0.5v8.6h7.2l-7.2,7.6v12.9l300.5,0.6v-13l-0.2-2.1l-4.2,4.2v-9.5L1655.4,715.6 z M1643.7,727.9h-9.3v-9.7L1643.7,727.9z M1628,727.9h-9l9-9.1V727.9z M1622.4,715.7l-9.5,9.5v-9.5H1622.4z M1606.6,715.7v8.6 l-8.4-8.6H1606.6z M1601.3,727.8h-9.3v-9.7L1601.3,727.8z M1585.6,727.8h-9.3l9.4-9.5L1585.6,727.8z M1579.6,715.7l-9.5,9.5v-9.5 H1579.6z M1563.7,715.7v8.6l-8.4-8.7L1563.7,715.7z M1558.4,727.8h-9.3v-9.7L1558.4,727.8z M1372.4,727.5h-9.3l9.3-9.1V727.5z M1378.8,727.5v-9.7l9.3,9.7H1378.8z M1393.4,724l-8.4-8.7h8.5L1393.4,724z M1399.8,715.4h9.5l-9.5,9.5V715.4z M1414.9,727.4h-8.8 l8.8-9.2V727.4z M1421.3,727.4v-9.7l9.3,9.7H1421.3z M1435.9,723.9l-8.4-8.7h8.5L1435.9,723.9z M1442.1,715.3h9.5l-9.5,9.5V715.3z M1458.1,727.3h-9.7l9.7-9.8V727.3z M1464.4,727.5v-9.7l9.3,9.7H1464.4z M1479,724l-8.4-8.7h8.4V724z M1485.4,715.4h9.5l-9.5,9.5 V715.4z M1500.4,727.6h-8.6l8.7-9L1500.4,727.6z M1506.7,727.6v-9.7l9.3,9.7H1506.7z M1521.4,724.1l-8.4-8.7h8.4V724.1z M1527.7,715.4h9.5l-9.5,9.5V715.4z M1542.9,718.6v9h-8.8L1542.9,718.6z M1649.1,724.3l-8.4-8.6h8.5L1649.1,724.3z'/%3E%3Cpath class='st7' d='M1349.4,334.4c0,0-66.8,117.9-179,195.7c-59.4,41.3-138.6,80.6-224.4,90c-199.6,22-361.2-53.5-519.6-181 S193.6,179.5,193.6,179.5'/%3E%3Cpolygon class='st5' points='659.1,577.2 665.6,579.7 665.3,701.2 658.8,701.2 '/%3E%3Cpolygon class='st5' points='706.6,596.1 711.9,597.7 711.7,701.3 705.3,701.3 705.5,595.6 '/%3E%3Cpolygon class='st5' points='917.4,621.2 923.9,620.7 923.7,703.4 917.2,703.4 '/%3E%3Crect x='838.2' y='659.5' transform='matrix(1.919869e-03 -1 1 1.919869e-03 214.4799 1540.3226)' class='st5' width='81.4' height='6.5'/%3E%3Crect x='798.2' y='659.4' transform='matrix(1.919869e-03 -1 1 1.919869e-03 174.5974 1500.2292)' class='st5' width='81.4' height='6.5'/%3E%3Cpolygon class='st5' points='792.8,617.3 799.4,618.2 799.2,701.5 792.7,701.4 '/%3E%3Cpolygon class='st5' points='748.8,609.1 755.3,611 755.2,701.4 748.7,701.4 '/%3E%3Cpolygon class='st5' points='957.3,617.7 963.7,617.2 963.5,705.8 957.2,705.8 '/%3E%3Cpolygon class='st5' points='998.9,611.5 1005.5,609.2 1005.3,705.9 998.8,705.9 '/%3E%3Cpolygon class='st5' points='1041.2,596.9 1047.2,595 1047,706 1041,706 '/%3E%3Cpolygon class='st5' points='1087.4,577.8 1094.1,574.1 1093.9,706.1 1087.2,706 '/%3E%3Cpolygon class='st5' points='1133.8,554.3 1139.8,551.8 1139.5,706.1 1133.5,706.1 '/%3E%3Cpolygon class='st5' points='1179.5,525 1186.5,520.2 1186.2,706.2 1179.1,706.2 '/%3E%3Cpath class='st5' d='M1239.5,706v-7.4h-4.9v8.3l-38.4-0.1v-6.3h-5.3v6.3l-36.6-0.1v-8.3h-5.3v8.3l-37.9-0.1v-8.1h-5.3v8.1 l-38.1-0.4V697h-5.3v9l-38-0.6v-7.2h-4v7.2l-32.9-0.4v-7.4h-5.3v7.4l-37.5-0.6v-6.9h-4.8v6.9l-37.9-0.6V699h-5.3v4.8l-38-0.6v-5.8 h-4.9v5.8l-38.4-0.6v-3.9h-5.3v3.7l-12.9-0.2V702h-14.8l-8.8-0.2v-4.9h-5.3v4.8l-38-0.6v-4.4H725v4.2l-38-0.6v-4.9h-5.4v4.9 l-38-0.6v-3.3h-4.9v3.1l-41.7-0.6v-7h-5.3v6.9l-37.5-0.6v-6.5h-4.8v6.3l-37.9-0.6V693h-5.3v4.4l-38-0.6v-5.5h-4.9v5.5l-38.4-0.6 v-3.5h-5.3v3.3l-36.6-0.5V691h-5.3v4.4l-38-0.6v-3.9h-5.3v3.9l-38-0.6v-4.4h-5.3v4.4l-38.1-0.6v-2.8h-4.9v2.8l-41.4-0.6v12.3h10.4 l-10.4,10.9v18.7l426.4,0.3v0.2l163.5,0.3v-0.3l156.2,0.1v0.5l88.6-0.5l218.8,0.1l-3.3-0.7h17.1v-15.5l-7.4,5.1v-10h7.4v-8.3 l-34.7-0.1L1239.5,706z M225.5,723.1h-13.4l13.4-13V723.1z M234.5,723.1v-13.9l13.5,13.9H234.5z M255.7,717.9l-12.1-12.3h12.1 V717.9z M264.9,705.8h13.7l-13.8,13.7L264.9,705.8z M286.7,723.2h-12.9l12.9-13V723.2z M295.7,723.2v-13.9l13.5,13.9H295.7z M316.8,718l-12.1-12.3h12.1V718z M325.9,705.9h13.7l-13.7,13.7V705.9z M348.8,723.3h-13.9l13.9-14.2V723.3z M358,723.3v-13.9 l13.6,14L358,723.3z M379.1,718.1l-12.2-12.3H379L379.1,718.1z M388.3,706H402l-13.8,13.7L388.3,706z M409.7,723.4h-12.5 l12.5-12.8V723.4z M418.9,723.4v-13.9l13.5,13.9H418.9z M440,718.2l-12.1-12.3H440V718.2z M449,706.1h13.7L449,719.8V706.1z M470.8,723.5h-12.7l12.7-13V723.5z M479.8,723.5v-13.9l13.5,13.9H479.8z M500.9,718.3L488.8,706H501L500.9,718.3z M510.1,706.2 h13.7l-13.7,13.7L510.1,706.2z M532.5,723.5h-13.4l13.4-13.5V723.5z M541.6,723.7v-13.9l13.5,13.9H541.6z M562.6,718.5l-12.1-12.3 h12.2L562.6,718.5z M571.8,706.3h13.7L571.8,720V706.3z M593.6,723.6h-12.9l12.9-13V723.6z M602.8,723.8v-13.9l13.5,13.9H602.8z M623.9,718.6l-12.1-12.4H624L623.9,718.6z M639.4,723.7l-6.3-3.7v-13.7l0,0v5.5l13.2,12.2L639.4,723.7z M657.9,721.8l-12.5-10.9 h12.5V721.8z M667.3,710.9H681l-13.8,11.5L667.3,710.9z M688.9,724H678l10.9-9.2V724z M698.1,724.3v-10.2l12.1,10.3L698.1,724.3z M719.2,721.2L707.1,711h12.2L719.2,721.2z M728.4,711h13.7l-13.8,11.4L728.4,711z M749.8,724.4h-11.3l11.3-9.5V724.4z M759,724.6 v-9.7l11.4,9.7H759z M780.8,722.7l-13.9-11.6h13.9V722.7z M789.5,723.1v-4.4l1.8,2.8L789.5,723.1z M804.8,722.1l-13.4-10.2h13.4 V722.1z M814.8,712.1h14.8l-14.8,10.7V712.1z M838,725h-12.7l12.7-9.3V725z M847.9,725.2V715l13.9,10.2H847.9z M870.6,721.5 l-13-9.5h13V721.5z M880.3,712H895l-14.6,10.7L880.3,712z M903.6,725.4h-13l13-9.7V725.4z M913.5,725.6v-9.9l13.4,9.9H913.5z M936.9,723l-15-11h15V723z M953.5,725.9l-7.2-2.3v-11.3l0.5-0.5l19,14.1H953.5z M977.6,723.8l-12.5-9.5h12.5V723.8z M986.9,714.3 h13.7l-13.7,10.2V714.3z M1008.6,726.1h-11.1l11.1-8.3V726.1z M1017.9,726v-9l12.1,9.2L1017.9,726z M1038.9,723.4l-12.1-9h12.2 L1038.9,723.4z M1047.9,714.4h13.7l-13.8,10L1047.9,714.4z M1069.6,726.4h-11.4l11.5-8.6L1069.6,726.4z M1078.7,726.4v-8.6 l11.6,8.8L1078.7,726.4z M1100.6,724.7l-13.9-10.2h11.4v0.2l2.5,1.8V724.7z M1124.9,722.9l-13.4-9h13.4V722.9z M1134.9,713.9h14.8 l-14.8,9.5V713.9z M1158.1,726.1h-13.4l13.4-8.8V726.1z M1168.1,726.1v-9.5l14.4,9.5H1168.1z M1190.7,722.5l-13-8.5h13V722.5z M1200.6,714h14.6l-14.6,9.5V714z M1223.8,726h-13.6l13.6-8.6V726z M1233.5,726.2v-8.8l13.5,8.8H1233.5z M1257.1,714.1v9.7 l-15-9.7H1257.1z'/%3E%3Crect x='1274.3' y='702.7' transform='matrix(1.919869e-03 -1 1 1.919869e-03 572.0259 1983.8085)' class='st5' width='11.1' height='5.3'/%3E%3Crect x='1317.3' y='701.1' transform='matrix(1.919869e-03 -1 1 1.919869e-03 616.8806 2025.0072)' class='st5' width='11.1' height='4.8'/%3E%3Crect x='1359.7' y='700.9' transform='matrix(1.919869e-03 -1 1 1.919869e-03 659.109 2067.3799)' class='st5' width='11.1' height='5.3'/%3E%3Cpath class='st8' d='M1740.7,701.8c0,0,29.8,3.8-74.5-26.9c-104.4-30.7-205,92.2-205,92.2l369,96L1740.7,701.8z'/%3E%3Cpath class='st9' d='M1774.2,855.5c0,0-339.2-203.6-417.5-192.1s-344,148.1-344,148.1l481.9,174.6l294.5,7.7L1774.2,855.5z'/%3E%3Crect x='1437.5' y='744.1' class='st10' width='9' height='31.2'/%3E%3Crect x='1437.5' y='744.1' class='st11' width='4.7' height='31.2'/%3E%3Cpath class='st12' d='M1465.3,725.4c0,0,29.7-1.9,22.6-32.6c0,0-5.5-17.1-22.2-17.7c0,0-5.2-17.7-23.5-14.8c0,0-10.3,0-16.4,10.6 c0,0-33.5-3.2-30.9,27.1c0,0,1.3,21.9,26.1,22.6c0,0-0.3,22.9,21.4,23.5C1442.2,744.1,1463,743.8,1465.3,725.4'/%3E%3Cpath class='st9' d='M1465.6,675.2c16.8,0.7,22.2,17.7,22.2,17.7c7.1,30.6-22.6,32.5-22.6,32.5c-2.1,16.7-19.4,18.5-22.6,18.7 v-83.9C1460.5,657.9,1465.6,675.2,1465.6,675.2'/%3E%3Crect x='1326' y='687.3' class='st10' width='8.2' height='28.3'/%3E%3Crect x='1326' y='687.3' class='st11' width='4.3' height='28.3'/%3E%3Cpath class='st12' d='M1351.2,670.3c0,0,27-1.8,20.5-29.6c0,0-5-15.5-20.2-16.1c0,0-4.7-16.1-21.4-13.5c0,0-9.4,0-14.9,9.7 c0,0-30.5-2.9-28.1,24.6c0,0,1.2,19.9,23.7,20.5c0,0-0.3,20.8,19.5,21.4C1330.2,687.3,1349.1,687,1351.2,670.3'/%3E%3Cpath class='st9' d='M1351.5,624.6c15.2,0.6,20.2,16.1,20.2,16.1c6.4,27.8-20.5,29.6-20.5,29.6c-1.9,15.2-17.7,16.8-20.5,17V611 C1346.9,608.8,1351.5,624.6,1351.5,624.6'/%3E%3Crect x='1601.6' y='715.7' class='st10' width='7.2' height='25'/%3E%3Crect x='1601.6' y='715.7' class='st11' width='3.8' height='25'/%3E%3Cpath class='st12' d='M1623.8,700.7c0,0,23.8-1.5,18.1-26.1c0,0-4.4-13.7-17.8-14.2c0,0-4.1-14.2-18.9-11.9 c-5.6,0.4-10.5,3.6-13.2,8.5c0,0-26.9-2.6-24.8,21.7c0,0,1,17.6,20.9,18.1c0,0-0.3,18.4,17.2,18.9 C1605.3,715.7,1622,715.5,1623.8,700.7'/%3E%3Cpath class='st9' d='M1624.1,660.4c13.4,0.5,17.8,14.2,17.8,14.2c5.7,24.6-18.1,26.1-18.1,26.1c-1.7,13.4-15.6,14.8-18.1,15v-67.3 C1620.1,646.5,1624.1,660.4,1624.1,660.4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
    background-size: cover;
    background-position: center right;
    position:relative;
    @include breakpoint(large only) {
      background-position: bottom left;
    }
    @include breakpoint(large down) {
      background-position: bottom center;
      background-size: cover;
      .x3 {
        display:none;
      }
    }
  }

  .team-footer {
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 23.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1667.8 800.7' style='enable-background:new 0 0 1667.8 800.7;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bclip-path:url(%23SVGID_2_);%7D .st1%7Bfill:%23EEEFEF;%7D .st2%7Bopacity:0.5;fill:%23CBCECD;enable-background:new ;%7D .st3%7Bfill:%2300758F;%7D .st4%7Bfill:%233F9BAF;%7D .st5%7Bfill:%23004F35;%7D .st6%7Bfill:%231D703A;%7D .st7%7Bfill:%238A341E;%7D .st8%7Bfill:%235D0101;%7D .st9%7Bfill:%2315553D;%7D .st10%7Bfill:%2300586E;%7D .st11%7Bfill:%231A1B1B;%7D .st12%7Bfill:%238A331D;%7D .st13%7Bopacity:0.5;fill:%23FFFFFF;enable-background:new ;%7D .st14%7Bopacity:0.3;enable-background:new ;%7D .st15%7Bfill:%23343535;%7D .st16%7Bfill:%234E5052;%7D .st17%7Bfill:%2365676A;%7D .st18%7Bfill:%23E9EAEA;%7D .st19%7Bfill:none;stroke:%23494949;stroke-width:2.83;stroke-miterlimit:10;%7D .st20%7Bfill:none;stroke:%2365676A;stroke-width:1.17;stroke-miterlimit:10;%7D .st21%7Bfill:%23BA0000;%7D .st22%7Bfill:none;%7D .st23%7Bfill:%23AD5219;%7D .st24%7Bfill:%23CF7215;%7D .st25%7Bfill:%23FFFFFF;%7D .st26%7Bfill:%23F6B159;%7D .st27%7Bfill:%23CD7328;%7D%0A%3C/style%3E%3Ctitle%3Eteam-footer-bg%3C/title%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_1_' x='-5.6' y='-68.1' width='1678.8' height='872.8'/%3E%3C/defs%3E%3CclipPath id='SVGID_2_'%3E%3Cuse xlink:href='%23SVGID_1_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st0'%3E%3Crect x='-22' y='-107.1' class='st1' width='1700.6' height='994.2'/%3E%3Cpath class='st2' d='M-7.2,866.6l2.1-75.4V498H7.6v-11.3l37.9-6.9v-25.5h13.1v9.3h15.3v-6.4h10.4v6.4h5.3v18.2h55v18.6h20.8v20 h6.3v-33.7h19.9l27,12.2v-5.8h12.7l0.3-11.5h11.9l1.5-24.9l1.1,25h9.9v13.3h3.7v17.1h5.8v-11.8h18.9v14.2h17.6V431l8.1,0.2V423 h26.1l0.1,7.8l7.6,0.2v109.2h22.3l-0.1-4.9h24.3v14.6h16.8v-52.4h8.1v-4h9.9v3.5l19.4-0.2v57.9h14.8l17.1-136l9,106.3h4.9v-6.9 h8.5v6.4h11.8v14.7h6.7l0.2,3.7h7.5l1.4-33l10.4-3.4v-15.9l8.1-7.8l1.8-31.3l2.3,31.8l7.2,7.3v16.6l7.8,3.7l0.6,19.2l3.4,0.2 l0.5-8.9h5.3c-0.3-0.3-0.3,33.1-0.2,79.6l16.5-0.5l0.5-1.7h10.7v2.3h8.8v30.4h18.5v-65h26.4l0.9,59.4h22.9v-93.3h45l0.4,145 l22.6-0.2v-75.3h46.4v75.1h17.4v-44.1h27.2v44.1h11.6v-42.1h67.6v41.8h9.6v-14.7h11.5v72.1l118.3-0.5v38l2.3,62.6L574.9,820 c0.2,32.4,0.3,53.9,0.3,53.9L-7.2,866.6z'/%3E%3Crect x='31.4' y='634.4' class='st3' width='1678.7' height='268.6'/%3E%3Crect x='31.4' y='634.4' class='st4' width='1678.7' height='7.5'/%3E%3Cpath class='st5' d='M-52.4,630.2c0,0-21.2,2.7,52.9-19.1s145.7,65.5,145.7,65.5l-262.2,68.3L-52.4,630.2z'/%3E%3Cpath class='st6' d='M-76.2,739.4c0,0,241.1-144.7,296.7-136.5s217.2,92.8,217.2,92.8L122.5,832.2l-209.3,5.5L-76.2,739.4z'/%3E%3Crect x='156.6' y='660.3' class='st7' width='6.4' height='22.2'/%3E%3Crect x='159.8' y='660.3' class='st8' width='3.3' height='22.2'/%3E%3Cpath class='st9' d='M143.3,647c0,0-21.1-1.4-16.1-23.1c0,0,3.8-12.1,15.8-12.6c0,0,3.6-12.6,16.7-10.5c4.9,0.3,9.3,3.2,11.7,7.6 c0,0,23.8-2.3,22,19.2c0,0-0.9,15.6-18.5,16.1c0,0,0.2,16.2-15.3,16.7C159.8,660.3,145,660,143.3,647z'/%3E%3Cpath class='st6' d='M143.1,611.3c-11.9,0.5-15.8,12.6-15.8,12.6c-5,21.8,16.1,23.1,16.1,23.1c1.5,11.9,13.9,13.2,16.1,13.3v-59.6 C146.7,598.9,143.1,611.3,143.1,611.3z'/%3E%3Crect x='236.5' y='619.8' class='st7' width='5.8' height='20.2'/%3E%3Crect x='239.3' y='619.8' class='st8' width='3' height='20.2'/%3E%3Cpath class='st9' d='M224.4,607.8c0,0-19.1-1.3-14.6-21c0,0,3.5-11.1,14.3-11.4c0,0,3.4-11.4,15.2-9.6c4.5,0.3,8.5,2.9,10.6,6.9 c0,0,21.7-2.1,20.1,17.5c0,0-0.8,14.1-16.9,14.6c0,0,0.2,14.8-13.9,15.2C239.3,619.8,225.9,619.7,224.4,607.8z'/%3E%3Cpath class='st6' d='M224.2,575.3c-10.8,0.5-14.3,11.4-14.3,11.4c-4.5,19.8,14.6,21,14.6,21c1.3,10.8,12.6,11.9,14.6,12v-54.2 C227.5,564.1,224.2,575.3,224.2,575.3z'/%3E%3Crect x='41.3' y='640.1' class='st7' width='5.1' height='17.8'/%3E%3Crect x='43.8' y='640.1' class='st8' width='2.7' height='17.8'/%3E%3Cpath class='st9' d='M30.6,629.4c0,0-16.9-1-12.8-18.5c0,0,3.1-9.8,12.7-10.1c0,0,2.9-10.1,13.4-8.5c3.9,0.3,7.5,2.6,9.3,6.1 c0,0,19.1-1.9,17.6,15.4c0,0-0.7,12.5-14.9,12.8c0,0,0.2,13.1-12.2,13.4C43.8,640.1,31.9,639.9,30.6,629.4z'/%3E%3Cpath class='st6' d='M30.5,600.8c-9.6,0.3-12.7,10.1-12.7,10.1c-4.1,17.5,12.8,18.5,12.8,18.5c1.2,9.6,11.1,10.5,12.8,10.6v-47.8 C33.4,590.9,30.5,600.8,30.5,600.8z'/%3E%3Cpath class='st10' d='M718.6,764.8H535.1c-0.7,0-1.3-0.6-1.3-1.3v-0.8c0-0.7,0.6-1.3,1.3-1.3h183.4c0.7,0,1.3,0.6,1.3,1.3v0.8 c0.1,0.6-0.4,1.2-1,1.3C718.7,764.8,718.7,764.8,718.6,764.8z'/%3E%3Cpath class='st10' d='M795.7,778.1H519.5c-0.7,0-1.3-0.6-1.3-1.3V776c0-0.7,0.6-1.3,1.3-1.3h276.2c0.7,0,1.3,0.6,1.3,1.3v0.8 c0.1,0.6-0.4,1.2-1,1.3C795.8,778.1,795.8,778.1,795.7,778.1z'/%3E%3Cpath class='st10' d='M687.4,787.8H503.9c-0.7,0-1.3-0.6-1.3-1.3v-0.8c0-0.7,0.6-1.3,1.3-1.3h183.4c0.7,0,1.3,0.6,1.3,1.3v0.8 c0.1,0.6-0.3,1.2-0.9,1.3C687.5,787.8,687.5,787.8,687.4,787.8z'/%3E%3Cpath class='st10' d='M763.7,798.3H487.6c-0.7,0-1.3-0.6-1.3-1.3v-0.8c0-0.7,0.6-1.3,1.3-1.3h276.2c0.7,0,1.3,0.6,1.3,1.3v0.8 C765,797.7,764.4,798.3,763.7,798.3z'/%3E%3Cpath class='st10' d='M742.9,807.2H466.7c-0.7,0-1.3-0.6-1.3-1.3v-0.8c0-0.7,0.6-1.3,1.3-1.3h276.2c0.7,0,1.3,0.6,1.3,1.3v0.9 C744.1,806.6,743.6,807.1,742.9,807.2z'/%3E%3Cpath class='st10' d='M625.6,818.3H442.2c-0.7,0-1.3-0.6-1.3-1.3v-0.8c0-0.7,0.6-1.3,1.3-1.3h183.4c0.7,0,1.3,0.6,1.3,1.3v0.8 C626.9,817.8,626.3,818.3,625.6,818.3z'/%3E%3Cpath class='st10' d='M693.8,828.7H417.6c-0.7,0-1.3-0.6-1.3-1.3v-0.8c0-0.7,0.6-1.3,1.3-1.3h276.2c0.7,0,1.3,0.6,1.3,1.3v0.8 C695.1,828.1,694.5,828.7,693.8,828.7z'/%3E%3Crect x='533.4' y='700.8' class='st11' width='9' height='63.7'/%3E%3Crect x='519.4' y='702.8' class='st11' width='9' height='74.8'/%3E%3Crect x='503.9' y='708.9' class='st11' width='9.3' height='77.9'/%3E%3Crect x='486.8' y='713.9' class='st11' width='10.4' height='82.9'/%3E%3Crect x='466.5' y='719' class='st11' width='12.9' height='86'/%3E%3Crect x='443.2' y='724' class='st11' width='14.3' height='91.9'/%3E%3Crect x='417.9' y='728.1' class='st11' width='14.7' height='99.2'/%3E%3Crect x='392' y='735.1' class='st11' width='17.3' height='108'/%3E%3Crect x='363.2' y='742.2' class='st11' width='18.3' height='108.4'/%3E%3Crect x='332.5' y='749.3' class='st11' width='19.4' height='126.6'/%3E%3Crect x='300.7' y='757.4' class='st11' width='21.6' height='136.4'/%3E%3Crect x='268' y='770.6' class='st11' width='17' height='146.5'/%3E%3Crect x='533.4' y='700.8' width='9' height='63.7'/%3E%3Crect x='519.4' y='702.8' width='9' height='74.8'/%3E%3Crect x='503.9' y='708.9' width='9.3' height='77.9'/%3E%3Crect x='486.8' y='713.9' width='10.4' height='82.9'/%3E%3Crect x='466.5' y='719' width='9.4' height='86'/%3E%3Crect x='443.2' y='724' width='9' height='91.9'/%3E%3Crect x='417.9' y='728.1' width='7.5' height='99.2'/%3E%3Crect x='392' y='735.1' width='8.4' height='108'/%3E%3Crect x='363.2' y='742.2' width='7' height='108.4'/%3E%3Crect x='332.5' y='749.3' width='7' height='126.6'/%3E%3Crect x='300.7' y='757.4' width='5' height='136.4'/%3E%3Crect x='268' y='770.6' class='st11' width='17' height='146.5'/%3E%3Crect x='-7.7' y='711.7' width='9.9' height='63.5'/%3E%3Crect x='35.9' y='707.7' width='15.9' height='58.5'/%3E%3Crect x='80.5' y='697.8' width='12.9' height='55.6'/%3E%3Crect x='147' y='689.9' width='11.9' height='52.6'/%3E%3Crect x='180.8' y='689' width='9.9' height='49.7'/%3E%3Crect x='207.5' y='682.9' width='11' height='48.6'/%3E%3Crect x='235.3' y='680.9' width='9' height='43.6'/%3E%3Crect x='257.1' y='676.9' width='7' height='39.6'/%3E%3Crect x='276.9' y='678' width='9' height='36.7'/%3E%3Crect x='297.8' y='671' width='7.9' height='41.6'/%3E%3Crect x='314.6' y='669' width='7' height='41.6'/%3E%3Crect x='332.5' y='669' width='6' height='35.7'/%3E%3Crect x='346.4' y='667' width='7.9' height='34.7'/%3E%3Cpolygon class='st11' points='-8.8,705.7 350.4,663.1 549.2,667.7 542.8,675 349.3,672 -14.7,719.6 '/%3E%3Cpath class='st11' d='M-9.7,728.6l351.5-52.5c0.5-0.1,8-1,8.6-0.9l196.1,4.8l-3.5,7l-192.2-2.8c5.4-0.9-7.5,0.9-7.9,0.9 L-8.8,739.5L-9.7,728.6z'/%3E%3Cpolygon class='st11' points='-9.7,746.4 354.3,687.9 549.2,692.9 548.3,698.9 352.4,695.8 -16.7,762.3 '/%3E%3Cpolygon class='st12' points='-7.7,773.2 352.4,700.8 547.7,698.9 125.2,871.4 -26.6,932 '/%3E%3Cpath d='M309.1,571.1l14-12l12.8,11.7L309.1,571.1z'/%3E%3Crect x='308.6' y='570.5' width='27.6' height='2.3'/%3E%3Crect x='322' y='554' width='2' height='6'/%3E%3Crect x='316.2' y='587.9' width='12.5' height='2.6'/%3E%3Crect x='321.5' y='589.6' width='2' height='86.8'/%3E%3Crect x='319' y='670.2' width='6.9' height='12.8'/%3E%3Crect x='317.2' y='681.8' width='10.5' height='22.7'/%3E%3Cpolygon points='331.5,709.2 313,712.7 313,706.4 331.5,702.9 '/%3E%3Crect x='313.9' y='601.5' width='17.1' height='2'/%3E%3Cpolygon class='st13' points='311.7,572.5 318,588.1 327.3,587.9 333.2,572.7 '/%3E%3Ccircle cx='313.5' cy='602.7' r='2'/%3E%3Ccircle cx='331.5' cy='602.3' r='2'/%3E%3Cpath d='M-11.2,579.3l19.9-17L27,578.9L-11.2,579.3z'/%3E%3Crect x='-11.8' y='578.4' width='39.4' height='3.3'/%3E%3Crect x='7.2' y='555' width='2.8' height='8.5'/%3E%3Crect x='-1.1' y='603.3' width='17.8' height='3.6'/%3E%3Crect x='6.4' y='605.7' width='2.8' height='123.7'/%3E%3Crect x='3' y='720.4' width='9.8' height='18.3'/%3E%3Cpolygon points='15.3,769.5 0.3,775.2 0.3,737.1 15.3,737.1 '/%3E%3Cpolygon points='20.8,775.9 -7.4,780.7 -7.4,771.7 20.8,766.9 '/%3E%3Crect x='-4.5' y='622.7' width='24.4' height='2.8'/%3E%3Cpolygon class='st13' points='-7.6,581.4 1.4,603.6 14.8,603.3 23.3,581.7 '/%3E%3Ccircle cx='-4.9' cy='624.4' r='2.8'/%3E%3Ccircle cx='20.6' cy='623.9' r='2.8'/%3E%3Cpolygon class='st14' points='-11.7,774.2 352.4,695.8 542.4,700.8 -69.8,861.5 '/%3E%3Cpolygon class='st15' points='350.4,663.1 350.6,671.8 538.5,675.1 549.2,667.7 '/%3E%3Cpolygon class='st15' points='351.3,688.5 351,696.3 543.7,699.3 549.1,693.5 '/%3E%3Cpolygon class='st15' points='350.3,675.1 350.6,684.1 542.8,687 546.3,680 '/%3E%3Cpolygon class='st16' points='172,418.9 175.5,421.2 164.6,436.8 160,432.3 '/%3E%3Cpolygon class='st17' points='188.6,461.9 203.1,453.4 205.1,456.9 191.6,465.8 '/%3E%3Cpolygon class='st17' points='194.9,499.2 212.6,501 212.5,505.7 193.9,505.7 '/%3E%3Cpolygon class='st16' points='185.1,532 202.7,543.6 199.6,548.6 180.5,537.5 '/%3E%3Cpolygon class='st15' points='160,552.6 169.5,573.5 165,576.2 153.5,557.1 '/%3E%3Cpolygon class='st11' points='84.2,556.2 73.9,574.4 78.3,576.6 92.3,558.2 '/%3E%3Cpolygon class='st11' points='38.7,538.1 52.6,525.1 56.7,531.6 41.8,542 '/%3E%3Cpolygon class='st11' points='24.7,486.9 24.7,493.5 47.4,495.4 48.2,486.5 '/%3E%3Cpolygon class='st11' points='39.4,445 42.9,438.9 60.3,451.4 54.9,458.5 '/%3E%3Cpolygon class='st15' points='75.7,413.7 80.9,410.6 91.8,427.2 85.3,431.3 '/%3E%3Crect x='106.7' y='555.6' class='st15' width='32.1' height='276.2'/%3E%3Crect x='106.7' y='555.6' width='8.7' height='276.2'/%3E%3Crect x='129.5' y='555.6' class='st17' width='5.1' height='276.2'/%3E%3Crect x='134.6' y='555.6' class='st16' width='4.2' height='276.2'/%3E%3Crect x='115.4' y='555.6' class='st11' width='6.1' height='276.2'/%3E%3Cpolygon class='st15' points='138.8,432.3 106.7,432.3 106.7,361.5 139.5,361.5 '/%3E%3Crect x='106.7' y='362.4' width='8.7' height='69.8'/%3E%3Cpolygon class='st17' points='134.5,432.3 129.5,432.3 129.5,363 134.5,363.4 '/%3E%3Crect x='134.6' y='363' class='st16' width='4.2' height='69.2'/%3E%3Crect x='115.4' y='362.2' class='st11' width='6.1' height='70.1'/%3E%3Cellipse class='st15' cx='117.9' cy='495.2' rx='73.4' ry='73'/%3E%3Ccircle class='st18' cx='126.7' cy='493' r='72.2'/%3E%3Ccircle cx='170.4' cy='506.3' r='2.5'/%3E%3Ccircle cx='86.3' cy='513.5' r='2.5'/%3E%3Ccircle class='st19' cx='126.7' cy='493' r='61.9'/%3E%3Ccircle class='st20' cx='126.7' cy='493' r='33'/%3E%3Cpath class='st21' d='M132.3,507.1c1.5-0.1,3-0.3,4.3-0.5c0.5-0.6,0.8-1,1.2-1.5c0.2-0.2,0.4-0.4,0.6-0.7c0.1-0.1,0-0.2,0-0.3 l-3.8-0.7c-0.1,0-0.4-0.1-0.5-0.1c-0.5-0.3-1.1-0.4-1.8-0.5c-0.4,0-0.7-0.3-1.2-0.6c-0.1,0-0.2-0.1-0.4-0.1 c-0.4,0.2-0.7-0.1-0.9-0.2c-0.2-0.1-0.4-0.1-0.6-0.1c-1.1,0.4-2.2,0.5-3.4,0.3c-0.1,0-0.2,0.1-0.4,0.1s-0.5,0.1-0.7,0.1 s-0.4,0-0.4,0.1c-0.5,0.3-0.8,0.7-1.4,0.6c-1.2,0-2,0.8-3.1,0.8c-0.7,0-1.4,0.1-2.1,0.2c-0.2,0-0.4,0.1-0.6,0.1 c0.1,0.2,0.2,0.3,0.4,0.6c0.4,0.4,0.7,0.9,1,1.4c0.2,0.4,0.6,0.7,1.1,0.7l2.7,0.3h0.8c0.1,0,0.1,0,0.2,0.1c-0.4,0.1-0.7,0.3-1,0.5 c-1,0.4-2.1,0.5-3.1,0.5c-1.2,0-2.3-0.7-2.9-1.8l-0.1-0.1c-0.8-0.5-1.3-1.3-1.4-2.2c-0.2-0.5,0-1.1,0.5-1.4 c0.1-0.1,0.1-0.1,0.1-0.2c0-0.3,0.4-0.5,0.7-0.6c0.9-0.2,1.9-0.3,2.8-0.6c0.8-0.1,1.6-0.2,2.4-0.2c0.4,0,0.9,0.1,1.3,0.2h0.4 c-0.6-0.4-1.2-0.7-1.9-0.9c-0.3-0.1-0.6,0-0.8,0.1c-2.1,0.6-4.1,1-6.2,1.6c-0.9,0.2-2,0.3-2.9,0.6c-0.2,0-0.4,0.1-0.6,0.2 c-1,0.6-2,1-3.1,1.3c-0.1,0-0.2,0.2-0.2,0.3c-0.1,0.6,0.2,1.2,0.7,1.6c0.1,0,0.1,0.1,0.1,0.1v0.1c-0.8-0.2-1.6-0.6-2.1-1.3 c-0.5-0.5-0.4-1.3,0.1-1.8c0.1-0.1,0.3-0.2,0.5-0.3l4.2-1.8c0.5-0.2,1-0.2,1.5-0.5c0.1,0,0.3,0,0.4-0.1c0.5-0.6,1.3-0.5,2-0.6 s1.5-0.2,2.3-0.5s1.5-0.3,2.3-0.5c-0.4-0.2-0.7-0.5-0.9-0.6s-0.7,0.1-1.1,0.1c-1.3,0.3-2.7,0.3-4.1,0.1c-0.5,0-0.9-0.1-1.4-0.1 l0,0c-0.9-0.7-2-0.2-3-0.7c-0.8-0.4-1.6-1-2.2-1.6c-0.1-0.1-0.3-0.3-0.5-0.3c-0.2-0.1-0.4-0.3-0.6-0.5s-0.1-0.1-0.2-0.1 c-1.2-0.6-2.3-1.4-3-2.6c-0.1-0.1-0.1-0.3-0.1-0.5c0-0.1,0-0.3-0.1-0.3c-0.6-1-1-2-1.3-3.1c-0.3-1.2-0.1-2.5,0.6-3.6 c0,0.2-0.1,0.5-0.1,0.7c0,0.9,0.2,1.7,0.6,2.5c0.4,0.8,0.8,1.6,1.2,2.3c0.1,0.2,0.3,0.4,0.6,0.3c0.5,0.1,1.1,0.3,1.5,0.6 c0.8,0.5,1.5,0.9,2.2,1.4c0.6,0.5,1.1,1.1,1.4,1.8c0.3,0.6,0.8,1.2,1.3,1.6c0.1,0.1,0.6,0,0.8-0.1c0.7-0.3,1.4-0.6,2.1-0.9 c0.1-0.1,0.4-0.1,0.5-0.2c-0.5-0.4-1.1-0.7-1.8-0.8c-1.3-0.3-2.5-1.1-3.4-2.1c-0.3-0.2-0.5-0.6-0.5-0.9c0-0.2-0.4-0.5-0.6-0.7 c-0.2-0.3-0.4-0.6-0.5-1c-0.1-0.3-0.3-0.5-0.4-0.8c-0.3-0.6-0.3-1.3-0.1-1.9c0.1-0.8,0.2-1.6,0.4-2.6c0-0.1,0.1-0.2,0.2-0.5 c-0.7-1.5-0.6-3.1,0.1-4.5c0.1-0.3,0.2-0.8,0.8-0.7l0.1-0.1c0.7-1.3,2-2.2,3.5-2.5c1.3-0.3,2.7-0.2,4,0.1c-2,0.6-4,1.5-5.7,2.8 c0.2,0.6,0.4,1.2,0.5,1.8c0.2,0.6,0.2,1.2,0.1,1.9c0,1.4-0.2,2.8-0.7,4.2c-0.2,0.7-0.4,1.3-0.6,2c-0.1,0.3,0.1,0.7,0.1,1 c0.5-0.1,1.1-0.1,1.6-0.1c1.2,0,2.5,0.2,3.6,0.6c0.2,0.1,0.4,0.2,0.6-0.2c0.3-0.6,0.7-1.1,1.2-1.6c-0.5-0.4-1-0.7-1.4-1.2 c-1.1-1.1-1.8-2.5-2-4v-1c-0.4-1-0.1-2.1,0.6-2.9c0.4-0.5,0.9-0.7,1.2-1.3h0.1c0.7,0,0.9-0.7,1.4-1c1.1-0.9,2.4-1.5,3.7-1.9 c1.3-0.3,2.4-0.7,3.6-1c0.8-0.3,1.7-0.2,2.4,0.2l0.4,0.3c-1.2-0.2-2.5,0.1-3.5,0.8v0.1c0.5-0.1,0.9-0.3,1.4-0.5 c0.2-0.1,0.6-0.1,0.8-0.2c0.3-0.1,0.7-0.1,1-0.1c0.1,0,0.1,0,0.4,0.2c-0.2,0.1-0.5,0.3-0.7,0.5c-1.7,0.8-3.3,1.7-4.9,2.8 c-0.9,0.7-1.9,1.3-2.9,1.9c-0.6,0.3-1.2,0.5-1.9,0.7h-0.2c-0.2,0.3-0.4,0.6-0.7,0.9c0.5,0.4,1,0.7,1.5,1l0.7-0.7 c-0.2,0.7-0.1,1.5,0.2,2.2c0.2-0.2,0.5-0.3,0.7-0.6c0,0.7-0.4,1.3,0.4,1.8c0.1-0.1,0.4-0.1,0.6-0.2c-0.1,0.2-0.1,0.6-0.2,0.8v0.2 h0.2l2.4-0.7c0.3-0.1,0.5-0.1,0.8-0.1c-0.1-0.2-0.2-0.4-0.4-0.6c-0.1-0.2-0.2-0.7,0-0.8c0.3-0.1,0.6-0.1,0.8,0 c0.5,0.3,0.9,0.7,0.9,1.3c0.5,0,0.9-0.1,1.4-0.1c1.3,0,2.4-0.1,3.7-0.1c0.2,0,0.4-0.1,0.5-0.3c0.3-0.4,0.6-0.7,0.9-0.9 c0.2-0.2,0.6-0.1,0.8,0.1c0.2,0.2,0.2,0.6,0,0.8c0,0,0,0,0,0c-0.1,0.1-0.1,0.2-0.2,0.3c1,0,2.1,0.2,3.1,0.2v-0.1 c0.1,0.1,0.4,0.2,0.5,0.3c0.7-0.3,0.6-1,0.7-1.6c0.1,0.2,0.3,0.4,0.5,0.6c0.6-0.6,0.5-1.4,0.7-2.2c0.2,0.2,0.3,0.5,0.5,0.7 l1.7-0.7c0-0.1-0.1-0.2-0.2-0.3l-0.2-0.2c0-0.6-0.4-0.6-0.7-0.7c-0.6-0.3-1.1-0.7-1.5-1.2c-0.9-0.8-1.8-1.8-2.7-2.7 c-1.1-1.1-2.2-2.1-3.5-2.9c-0.2-0.2-0.4-0.4-0.7-0.6c-0.2-0.2-0.1-0.6,0.2-0.7c0.1,0,0.1-0.1,0.2-0.1c0.6-0.2,1.3-0.2,1.9,0 c1,0.5,2,0.9,3,1.4c0.9,0.5,1.8,1,2.7,1.6c1,0.7,1.9,1.6,2.4,2.7c0.1,0.1,0.4,0.1,0.4,0.3c0.2,0.3,0.4,0.6,0.5,0.9 c0.7,0.9,0.9,2.1,0.6,3.2c-0.1,0.3-0.3,0.5-0.5,0.7c0.2,0.5,0,0.8-0.2,1.2c-0.5,1-1.1,1.9-2,2.6c0.2,0.2,0.5,0.6,0.7,0.8 s0.2,0.1,0.4,0.2c1.2,0.1,2.3,0.1,3.6,0.2c0.1,0,0.2-0.1,0.2-0.2c0.3-0.4,0.4-0.9,0.2-1.4c-0.1-0.8-0.3-1.6-0.6-2.5 c-0.2-1.2-0.2-2.3-0.1-3.5c0.1-0.9,0.3-1.7,0.6-2.6c0-0.2,0.2-0.3,0.4-0.6c-1.6-1.5-3.5-2.6-5.6-3.4c1.8-0.3,3.7,0,5.4,0.8 c0.8,0.4,1.4,1.1,1.8,1.9c0.2,0.5,0.2,0.5,0.9,0.6c0.1,0.8,0.4,1.5,0.5,2.3c0,0.8-0.1,1.6-0.5,2.3c0,0.1-0.1,0.3-0.1,0.5 c0,1,0.1,2.2,0.1,3.3c0.1,0.6-0.1,1.1-0.5,1.5c-0.2,0.3-0.4,0.8-0.6,1.2c-0.3,0.4-0.6,0.7-0.9,1c0.1,0.3,0,0.6-0.3,0.8 c0,0-0.1,0-0.1,0c-0.5,0.3-0.9,0.8-1.4,1.2s-1.3,0.5-1.9,0.8c-0.1,0-0.1,0-0.2,0.1c0,0.1,0,0.1-0.1,0.1c0,0,0,0,0,0 c0.2,0.1,0.3,0.1,0.5,0.2c0.7,0.1,1.5,0.3,2.2,0.5c0.1,0,0.4,0.1,0.5,0.1c0.7,0.1,0.9-0.1,1.3-0.7c0.6-1.2,0.8-2.5,1.8-3.4 c0.2-0.2,0.4-0.4,0.6-0.7c0.6-0.6,1.2-1,1.8-1.6c0.1-0.1,0.3-0.2,0.5-0.2c0.4,0,0.6-0.3,0.7-0.7c0.2-1,0.5-2.1,0.7-3.1 c0.3-0.8,0.2-1.7-0.2-2.5c0.6,0.5,1,1.3,1,2.1c0.3,1.3,0.2,2.6-0.1,3.8c0,0.2-0.1,0.5-0.2,0.7v0.6c0,0.3-0.1,0.6-0.2,0.8 c-0.5,1.1-1.2,2-2.2,2.7c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.1c0,0,0,0,0,0c-0.6,0.7-1,1.4-1.6,2.1c-0.8,0.8-1.9,1.3-3,1.4 c-0.1,0-0.3,0-0.4,0.1c-0.3,0.4-0.7,0.7-1.2,0.7c-1,0.3-2.1,0.5-3.1,0.7c-0.8,0.1-1.6,0.1-2.4,0c-0.6-0.1-1.2,0.1-1.5,0.6 c0.8,0,1.5-0.1,2.2-0.1h0.4c1-0.1,2.2-0.1,3.3-0.2c0.2,0,0.3,0,0.5,0.1c0.4,0,0.6,0.1,0.9,0.1c0.9,0.1,1.9,0.2,2.9,0.3 c0.8,0.1,1.6,0.1,2.3,0.2c0.4,0,0.9,0.2,1.3,0.3c0.6,0.4,0.7,1.2,0.4,1.9c-0.2,0.4-0.6,0.8-0.9,1.2c-0.2,0.2-0.4,0.3-0.7,0.5 c0-0.1,0-0.2,0.1-0.2c0.4-0.4,0.5-1.1,0.4-1.6v-0.5h-0.7c-1,0.1-2.1-0.1-3-0.5c-0.2-0.1-0.6,0-0.9,0h-1.9 c-0.1,0.3-0.5,0.1-0.7,0.1s-0.6-0.1-0.9-0.1h-7c-0.8,0.2-0.7,0.1-0.7,1.3c0.3-0.1,0.6-0.1,0.9-0.1h2.1c0.7,0.1,1.5,0.2,2.2,0.3 c0.7,0.1,1.4,0.3,2,0.5c0,0,0.1,0,0.1,0.1c0.2,0.5,0.6,1,0.8,1.5c0.1,0.6-0.1,1.2-0.5,1.6c-0.2,0.3-0.5,0.8-0.9,0.9l-0.1,0.1 c-0.5,1-1.6,1.7-2.8,1.8c-1.1,0.1-2.2,0-3.1-0.5C132.9,507.4,132.6,507.3,132.3,507.1L132.3,507.1z M129.1,474.1 c0.1,0,0.1,0.1,0.2,0.1s0.5,0.1,0.7,0.2s0.4,0.2,0.6,0.3s0.7,0.3,1,0.5s0.4,0.2,0.6,0.3c0-0.1,0.1-0.1,0.1-0.1 C131.3,474.7,130.4,473.9,129.1,474.1L129.1,474.1z M132.5,475.6L132.5,475.6c0.2,0.5,0.5,0.9,0.9,1.3l0.1-0.1 C133.2,476.4,132.8,476,132.5,475.6L132.5,475.6z M122.5,476.3L122.5,476.3c-0.5,0.2-1,0.5-1.3,0.9l0.1,0.1 C121.7,477,122.1,476.7,122.5,476.3L122.5,476.3z'/%3E%3Ccircle class='st22' cx='126.2' cy='492.1' r='37.1'/%3E%3Cpolygon class='st23' points='-7.3,835.2 546.3,680 549.2,680 143.5,799 -8.8,844.1 '/%3E%3Cpolygon class='st24' points='-8.8,794.1 547.7,668.1 -9.5,799 '/%3E%3Cpolygon class='st23' points='-8.1,879.4 546.3,694.1 -11.7,886.1 '/%3E%3Cpolygon points='-4.8,795 549.2,667.7 549.2,675.7 -10.8,820.8 '/%3E%3Cpolygon points='-8.8,838.7 549.2,680 549.1,687.9 -6.8,862.5 '/%3E%3Cpolygon points='-7.7,883.4 549.1,693.5 549.2,702.2 -7.7,906.1 '/%3E%3Cpolygon points='-7.7,917.1 548.3,700.3 -16.7,931 '/%3E%3Cpath class='st25' d='M94.4,335.4c0,0,4.5-6.8,11.2-2.6c2.5,1.6,3.8,4.6,3.4,7.6l0.6,5.1l19.1,11.4l-0.9,5.5c0,0-6.2,2-9.3,1.9 s-12.1,0.7-17.9-4.2c0,0-6-5.8-4.2-12.9s1.1-7.9,1.1-7.9L94.4,335.4z'/%3E%3Cpath class='st26' d='M88.2,337.6c1-1,2.3-1.6,3.7-1.8l2.4-0.5l1.9,2.4L88.2,337.6z'/%3E%3Cpath class='st27' d='M97.2,339.2c0,0-5.4,0.1-6.2-0.6c-0.3-0.3-0.7-0.6-1.2-0.8h5.8L97.2,339.2z'/%3E%3Cpath class='st11' d='M128.5,356.8c0,0,13.3,2.6,15.6,3.4c1.2,0.3,2,1.3,2,2.6l-28.3-1.2L128.5,356.8z'/%3E%3Cpath class='st15' d='M134.6,360.2l-4-2.1l-15.5,3.6C115.1,361.6,128,364.2,134.6,360.2z'/%3E%3Cpath class='st16' d='M132.1,358.7l-22.6-13.2c0,0-6.6-3.6-8.2,4.9c0,0-1.2,8,8.9,10.5C110.1,360.8,116.9,363.3,132.1,358.7z'/%3E%3Cpath class='st17' d='M104.1,346.2c0,0-1.8,5.4,2.6,8.2c0,0,7.3,7.1,21.8,2.4l-19.2-11.4C109.4,345.5,107.4,343.7,104.1,346.2z'/%3E%3Ccircle class='st17' cx='100' cy='335.4' r='0.8'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
    background-size: cover;
    background-repeat:no-repeat;
    background-position: bottom left;
    position:relative;
    padding-bottom:280px;
    background-color: #eeefef;
    h2, h3 {
      color:$secondary-color;
    }
    @include breakpoint(large only) {
      background-position: bottom left;
    }
    @include breakpoint(medium down) {
      background-position: bottom left;
      background-size: cover;
      padding-bottom:350px;
    }
  }

  .callout-content {
    margin-top:30vh;
    opacity:0;
    animation:fadeIn ease-in 1;
    animation-fill-mode:forwards;
    animation-duration:0.5s;
    animation-delay: 0.5s;
    @include breakpoint(small only) {
      margin-top:23vh;
    }
    @include breakpoint(large down) {
      margin-top:20vh;
      width:70%;
    }
  }


  .x1 {
    animation: movecloudsshort 90s linear infinite;
    width:195px;
    height:auto;
    top:8%;
    left:15%;
    @include breakpoint(large down) {
      width:125px;
    }
  }

  .x2 {
    animation: moveclouds 110s linear infinite;
    width:300px;
    height:auto;
    top:20%;
    left:70%;
    @include breakpoint(large down) {
      width:265px;
    }
  }

  .x3 {
    animation: moveclouds 110s linear infinite;
    width: 132px;
    height: auto;
    bottom: 30%;
    left: 66%;
    @include breakpoint(large down) {
      width: 360px;
    }
  }

  .class-group {
    margin-top:50px;
    width:100%;
    .card {
      margin: 0 10px;
    }
    .card-section {
      min-height:160px;
    }
    @include breakpoint(medium down) {
      width:80%;
      margin-left:auto;
      margin-right:auto;
    }
  }

  .card-section {
    h5 {
      font-size:18px;
      color: $secondary-color;
      margin: 0;
    }
    p:first-of-type {
      margin:0;
      font-size:15px;
      color: $tertiary-color;
      font-style: italic;
      line-height:1.2;
    }
    p:nth-of-type(2) {
      margin-bottom:0;
      margin-top:5px;
      font-size:15px;
      line-height:1.2;
      font-style: italic;
    }
  }

  .card img {
    width:100%;
  }

  .mentor-group {
    width:80%;
    margin: 50px auto 0;
    .card {
      margin: 0 10px;
    }
    @include breakpoint(medium down) {
      width:80%;
    }
    .card-section {
      @include breakpoint(medium up) {
        min-height:95px;
      }
    }
  }

  @font-face {
    font-family: 'slick';
    font-weight: normal;
    font-style: normal;
    src: url('../assets/fonts/slick.eot');
    src: url('../assets/fonts/slick.eot?#iefix') format('embedded-opentype'), url('../assets/fonts/slick.woff') format('woff'), url('../assets/fonts/slick.ttf') format('truetype'), url('../assets/fonts/slick.svg#slick') format('svg');
  }


  .interns-grid {
    padding:0;
    .grid-container.fluid {
      padding-right: 0.2rem;
      padding-left: 0.2rem;
    }
    .cell {
      overflow:hidden;
    }
  }

  .intern-info {
    color:white;
  }


  .brand-orange {
    background-color: rgba(#f29111, 1);
  }
  .brand-darkorange {
    background-color: rgba(#8a331d, 1);
  }
  .brand-blue {
    background-color: rgba(#00758f, 1);
  }
  .brand-darkblue {
    background-color:rgba(#003b4d, 1);
  }
  .brand-green {
    background-color: rgba(#3a913f, 1);
  }
  .brand-darkgreen {
    background-color: rgba(#004f35, 1);
  }
  .brand-burgundy {
    background-color: rgba(#942645, 1);
  }
  .brand-darkburgundy {
    background-color: rgba(#592439, 1);
  }

  .details {
    max-width: 100%;
  }


  .intern {
    background-size:cover;
    background-repeat:no-repeat;
    width:16.66667vw;
    height:16.66667vw;
    overflow:hidden;
    box-sizing: border-box;

    @include breakpoint(medium down) {
      width: 33.33vw;
      height: 33.33vw;
    }

    @include breakpoint(small down) {
      width: 100vw;
      height: 100vw;
    }

    &:hover {
      .intern-info {
        opacity:1;
      }
    }

    .brand-orange {
      background-color: rgba(#f29111, .85);
    }
    .brand-darkorange {
      background-color: rgba(#8a331d, .85);
    }
    .brand-blue {
      background-color: rgba(#00758f, .85);
    }
    .brand-darkblue {
      background-color:rgba(#003b4d, .85);
    }
    .brand-green {
      background-color: rgba(#3a913f, .85);
    }
    .brand-darkgreen {
      background-color: rgba(#004f35, .85);
    }
    .brand-burgundy {
      background-color: rgba(#942645, .85);
    }
    .brand-darkburgundy {
      background-color: rgba(#592439, .85);
    }
  }

  .intern-info {
    height:100%;
    padding:20px;
    opacity:0;
    transition: opacity 0.3s ease;
    display:flex;
    .details {
      font-size:18px;
      line-height:1.2;
      @include flex-align-self(middle);

      @media screen and (min-width: 1024px) and (max-height: 768px) {
        font-size: 15px;
      }
    }
    .update {
      text-align:center;
      font-size:20px;
    }
    p {
      font-size:0.8em;
      line-height: 1.2;
      margin-top:10px;
      margin-bottom:0;
    }
    .name {
      font-size:1em;
      display:block;
      margin-bottom:0;
    }
    .school {
      font-size:0.9em;
      display:block;
      margin-bottom:0;
    }
  }

  .quote-info {
    color:white;
    padding:10px 10% 10px 16%;
    display:flex;
    height:16.666667vw;
    overflow:hidden;
    background-image: url('../assets/img/quote.svg');
    background-repeat: no-repeat;
    background-position: 5% 15%;
    background-size:40px 40px;
    @include breakpoint(1400px down) {
      padding:20px 20px 20px 13%;
      background-size:20px 20px;
      background-position:3% 7%;
      font-size:14px;
      p {
        line-height:1.3;
      }
    }
    @include breakpoint(medium down) {
      height: 33.33vw;
    }
    @include breakpoint(small down) {
      height: 100vw;
      background-size:40px 40px;

    }
    p:last-of-type {
      margin-bottom:0;
    }
    .details {
      @include flex-align-self(middle);
    }
  }

  .grid-callout {
    padding:0px 7%;
    display:flex;

    @include breakpoint(large down) {
      padding:20px;
      font-size:15px;
      h3 {
        font-size:23px;
      }
    }
  }

  .grid-callout-copy {
    @include flex-align-self(middle);
    max-width: 100%;
  }




</style>
