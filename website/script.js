*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body{
    line-height: 1.6;
    color: #333;
    background-color: gainsboro;
}
.container{
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}
/*styles for the header*/
header{
    background-color: #1a1a2e;
    color: #fff;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}
header .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo{
    font-size: 1.5rem;
    font-weight: bold;
    color: #4cc9f0;
    transition: ease 1000ms;
}
.logo:hover{
    cursor: pointer;
    scale: 1.2;
}
nav ul{
    display: flex;
    list-style: none;
}
nav ul li{
    margin-left: 1.5rem;
}
nav ul li a{
    color: #fff;
    text-decoration: none;
    transition:ease  0.4s;
}
nav ul li a:hover ,button a{
    color: #4cc9f0;
    border-bottom:2px solid #4cc9f0;
}
nav ul li button{
    background-color: transparent;
    width: 75px;
    height: 25px;
    border-radius: 0 10px;
    border: none;
    background-color: #4cc9f0;
    transition: ease 0.3s;
}
nav ul li button a{
    color: #000;
}
nav ul li button a:hover{
    color: #000;
}
nav ul li button:hover{
    box-shadow: 0 0 10px #4cc9f0;
    cursor: pointer;
}
.btn{
    display: inline-block;
    background-color: #4cc9f0;
    color: #1a1a2e;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: bold;
    transition: back-ground 0.3s;
}
.btn:hover{
    background-color: #3aa8d8;
    color: #fff;
}
.btn-large{
    padding: 0.8rem 1.5rem;
    font-size: 1.1rem;
}
.mobile-menu{
    display: none;
    cursor: pointer;
    font-size: 1.5rem;
}
/*hero section*/
.hero{
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    color:#fff;
    padding: 8rem 0 5rem;
    
}
.hero h1{
    margin-bottom: 1rem;
    font-size: 2rem;
}
.hero p{
    font-size: 1.2rem;
    margin-bottom: 1rem;
    max-width: 700px;
}
/*feature*/
.features{
    padding: 4rem 0;
    background-color: gainsboro;
}
.features h2{
    text-align: center;
    margin-bottom: 2.5rem;
    color: #1a1a2e;
    position: relative;
    font-size: 2rem;
}
.features-grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}
.feature-card{
    background-color: #fff;
    border-radius: 8px;
    padding: 1.8rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    transition:ease 0.3s;
    border: 1px solid #f0f0f0;
}
.feature-card:hover{
    transform: translateY(-3px);
     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
.feature-card h3{
    color: #1a1a2e;
    margin-bottom: 0.8rem;
    font-size: 1.2rem;
}
.feature-card p{
    color: #555;
    line-height: 1.5;
    font-size: 0.95rem;
}
/*market overview*/
.market-overview{
    padding: 4rem 0;
}
.market-overview h2{
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
}
.crypto-grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
}
.crypto-card{
    background: #fff;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: tranform 0.3s;
}
.crypto-card{
    transform: translateY(-5px);
}
.crypto-icon{
    width: 40px;
    height: 40px;
    background-color: #eee;
    border-radius: 50%;
    margin-bottom: 1rem;
}
.crypto-card h3{
    margin-bottom: 0.5rem;
}
.price{
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.3rem;
}
.change{
    color: #4cc9f0;
}
.loading{
    animation:pulse 1.5s infinite;
}
@keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
}
/*footer*/
footer{
    background-color: #1a1a2e;
    color: #fff;
    text-align: center;
    padding: 1.5rem 0;
    margin-top: 2rem;
}
.footer-links{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
}
.footer-links a{
    color: #ddd;
    text-decoration: none;
    transition: ease 0.3ms;
    font-size: 0.9rem;
}
.footer-links a:hover{
    color: #4cc9f0;
}
.footer-bottom{
    text-align: center;
    padding-top: 1.2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: #aaa;
    font-size: 0.85rem;
    width: 100%;
}
/*responsive design*/
@media(max-width:768px){
    nav{
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: #1a1a2e;
        padding: 1rem;
    }
    nav .active{
        display: block;
    }
    nav ul {
        flex-direction: column;
    }

    nav ul li {
        margin: 0.5rem 0;
    }
    .mobile-menu{
        display: block;
    }

   .hero-image img{
    width: 400px;
   }
    }
    .hero {
        padding: 6rem 0 3rem;
    }

    .hero h1 {
        font-size: 2rem;
    }

/*auth-section styling*/
.auth-section{
    padding: 6rem 0;
    min-height: calc(100vh-150px);
    display: flex;
    align-items: center;
    background-color: #f5f7fa;
}
.auth-card{
    max-width: 500px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    overflow: hidden;
}
.auth-header{
    padding: 2rem;
    text-align: center;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    color: #fff;
}
.auth-header h2{
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
}
.auth-header p{
    opacity: 0.8;
    font-size: 0.95rem;
}
.auth-card form{
    padding: 2rem;
}
.form-group{
    margin-bottom: 1.5rem;
}
.form-group label{
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
}
.input-with-icon{
    position: relative;
}
.input-with-icon i{
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #6c757d;
}
.input-with-icon input{
    width: 100%;
    padding: 0.8rem 1rem 0.8rem 40px;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.3s;
}
.input-with-icon input:focus{
    border-color: #4cc9f0;
    outline: none;
}
.form-options{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}
.remember-me{
    display: flex;
    align-items: center;
    font-size: 0.9rem;
}
.remember-me input{
    margin-right: 0.5rem;
}
.forgot-password{
    font-size: 0.9rem;
    color: #4cc9f0;
    text-decoration: none;
}
.forgot-password:hover{
    text-decoration: underline;
}
.terms{
    margin: 1.5rem 0;
    font-size: 0.9rem;
}
.terms a{
    color: #4cc9f0;
}
.btn-btn-block{
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: ease 0.3s;
    background-color:#4cc9f0;
}
.btn-btn-block:hover{
    background-color:  #3aa8d8;
}
.auth-footer{
    text-align:center;
    margin-top: 1.5rem;
    font-size: 0.9rem;
}
.auth-footer a{
    color: #4cc9f0;
    text-decoration: none;
}
.auth-footer a:hover{
    text-decoration: underline;
}
/*responsive*/
@media (max-width:768px){
    .auth-card{
        margin: 0 1rem;
    }
    .auth-header{
        padding: 1.5rem;
    }
    .auth-card form{
        padding: 1.5rem;
    }
}
/*Admin styles*/

.logo span {
    background: #4cc9f0;
    color: #1a1a2e;
    padding: 0.2rem 0.8rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: bold;
}
.admin-actions{
    display: flex;
    gap: 3rem;
}
#LogoutBtn{
    width: 80px;
    background-color: #4cc9f0;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: ease 0.3s;
}
#LogoutBtn:hover{
    scale: 1.1;
    color: #fff;
    background-color: #3aa8d8;
}
.admin-sidebar{
    position: fixed;
    left: 0;
    top: 70px;
    bottom: 0;
    width: 250px;
    background-color: #16213e;
    color: #fff;
    padding: 1.5rem 0;
    transition: ease 0.3s;
}
.admin-sidebar nav ul{
    list-style: none;
    display: block;
    

}
.admin-sidebar nav a{
    color: #ddd;
    padding: 0.8rem 1.5rem;
    text-decoration: none;
    transition: ease 0.2s;
    
}

.admin-sidebar nav a:hover,.admin-sidebar nav a.active{
    background-color: rgba(76, 201, 240, 0.1);
    color: #4cc9f0;
    border-left: 3px solid #4cc9f0;
    border-bottom: none;
}
.admin-sidebar nav a i{
    margin-right: 0.7rem;
    width: 20px;
    text-align: center;
}
.admin-main{
    margin-left: 250px;
    padding: 2rem;
    min-height: calc(100vh-70px);
    background-color: #f8f9fa;
}
/*stats cards*/
.admin-stats{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap:1.5rem ;
    margin-bottom: 2rem;
}
.stat-card{
    background-color: #fff;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    display: flex;
    align-items: center;
    gap: 1.5rem;
}
.stat-icon{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(76, 201, 240, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4cc9f0;
    font-size: 1.5rem;
}
.stat-card h3{
    color: #666;
    font-size: 1rem;
    margin-bottom: 0.3rem;
}
.stat-card p{
    font-size: 1.8rem;
    font-weight: 600;
    color: #1a1a2e;
}
/*activity feed*/
.activity-feed{
    background-color: #fff;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
.activity-feed h2{
    margin-bottom: 1rem;
    color: #1a1a2e;
    display: flex;
    align-items: center;
    gap: 0.7rem;
}
.activity-feed ul{
    list-style: none;
    padding: 0;
    margin: 0;
}
.activity-feed li{
    padding: 0.8rem 0;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    gap: 1rem;
    
}
.activity-feed li:last-child {
    border-bottom: none;
}
.activity-feed li i{
    color: #4cc9f0;
    width: 20px;
}
.activity-feed li span{
    flex: 1;
}
.activity-feed li small{
    font-size: 0.8rem;
    color: #999;
}
/* Loading States */
.section-loading,
.empty-state {
    text-align: center;
    padding: 2rem;
    color: #666;
}
.fa-spinner {
    margin-right: 0.5rem;
    animation: spin 1s linear infinite;
}
@keyframes spin{
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
}
.mobile-menu{
    display: none;
}
.mobile-nav{
    display: none;
    position: fixed;
    top: 70px;
    right: 0;
    background-color: #1a1a2e;
    width: 200px;
    padding: 1rem;
    z-index: 999;
    box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.1);
}
.mobile-nav a{
    display: block;
    color: #fff;
    padding: 0.8rem 0;
    text-decoration: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.mobile-nav a i{
    margin-right: 0.5em;
    width: 20px;
}
/*modal*/
.fdsaaAxdfyuiop[]poiuytre][p890--09876521]