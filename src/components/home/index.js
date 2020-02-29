import React  from "react";
import LastArticle from './lastArticles'
import CarouselMain from './main-carousel'
import Welcome from "./welcome";
import Teams from "./team";




const Index  =() =>  {

    
    return (
        <div>
            {/* <CarouselMain /> */}
            <Welcome />
            <LastArticle />
            <Teams />
            
        </div>
                
    );
   
}
export default Index