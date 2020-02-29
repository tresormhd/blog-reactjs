import React from 'react';

import './App.css';
import $ from 'jquery';

import { BrowserRouter as Router, Route,Link, NavLink, Switch, Redirect } from 'react-router-dom';

import Header from "./components/header"
import Footer from "./components/footer"
import BLogAll from './components/blog';
import BlogDetail from './components/blog/blogDetail';
import Index from './components/home';
import Galery from './components/galery';
import About from './components/about';
import Contact from './components/contact';
import NotFound from './components/NotFound';


function App() {

  return (
          
        (function ($) {
            var windowH = $(window).height()/2;

            $(window).on('scroll',function(){
                if ($(this).scrollTop() > windowH) {
                    $("#myBtn").css('display','flex');
                } else {
                    $("#myBtn").css('display','none');
                }
            });

            $('#myBtn').on("click", function(){
                $('html, body').animate({scrollTop: 0}, 300);
            });
        }),

    <Router>
        <Header />

            <Route exact path="/" component={Index} />
            <Route exact path="/blog" component={BLogAll} />
            <Route exact path="/blog-detail" component={BlogDetail} />

            <Route exact path="/galery" component={Galery} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            {/* <Route  component={NotFound} /> */}

        <Footer />

            
    </Router>
     
  );
}

export default App;
