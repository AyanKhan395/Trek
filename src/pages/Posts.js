import React from 'react'
import '../style.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navbar from "../Navbar"

const Posts = ({setLoginUser}) =>   {
  return (
    <div style={{marginTop: "40px"}}>
      <Navbar setLoginUser={setLoginUser} />
      <section className="blogs" id="blogs">
      <div>
      <h1 className="heading"> Our Daily Posts </h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper>
            <div className="slide">
                <img src={require('../images/chitta.jpg')} /> 
                  {/* <img src="images/img-1.jpg" alt=""> */}
                  <div className="icons">
                      <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2022 </a>
                      <a href="#"> <i className="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>Chitta Katha Lake</h3>
                  <p>Chitta Katha Lake is an alpine lake located in Shounter Valley, Azad Kashmir, Pakistan.</p>
                  <a href="#" className="btn">read more</a>
            </div></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper><div className="slide">
                <img src={require('../images/Gali.jpg')} /> 
                  {/* <img src="images/img-2.jpg" alt=""> */}
                  <div className="icons">
                      <a href="#"> <i className="fas fa-calendar"></i> 19th june, 2022 </a>
                      <a href="#"> <i className="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>Ratti Gali Lake</h3>
                  <p>The Ratti Gali lake is alpine glacial lake in Neelum Valley Azad Kashmir, 
                    Pakistan at a height of 3700m ( 12130 feet).</p>
                  <a href="#" className="btn">read more</a>
            </div></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper>
            <div className="slide">
                <img src={require('../images/Gojal.jpg')} /> 
                  {/* <img src="images/img-3.jpg" alt=""> */}
                  <div className="icons">
                      <a href="#"> <i className="fas fa-calendar"></i> 7th sep, 2022 </a>
                      <a href="#"> <i className="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>Gojal گوجال</h3>
                  <p>Gojal  گۉجال, also called Upper Hunza, is situated in the north western part of Pakistan.</p>
                  <a href="#" className="btn">read more</a>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper>
            <div className="slide">
                <img src={require('../images/Attabad.jpg')} /> 
                  {/* <img src="images/img-4.jpg" alt=""> */}
                  <div className="icons">
                      <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i className="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>Attabad Lake عطا آباد جھیل</h3>
                  <p>Attabad Lake is located in the Hunza Valley, in the province of Gilgit−Baltistan, Pakistan.</p>
                  <a href="#" className="btn">read more</a>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper>
            <div className="slide">
                <img src={require('../images/jamgar.png')} /> 
                  {/* <img src="images/img-5.jpg" alt=""> */}
                  <div className="icons">
                      <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i className="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>Jamgar Waterfall</h3>
                  <p>Jamgar Falls is a beautiful and refreshing waterfall of Pakistan located in Neelam Valley.</p>
                  <a href="#" className="btn">read more</a>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper>
            <div className="slide">
                <img src={require('../images/Kiwai.jpg')} /> 
                  {/* <img src="images/img-6.jpg" alt=""> */}
                  <div className="icons">
                      <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i className="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>Kiwai Waterfall</h3>
                  <p>Like this one of the most famous spots, some people went for a hangout for one day they choose Kiwai.</p>
                  <a href="#" className="btn">read more</a>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>



      </section>
    </div>
  )
}

export default Posts