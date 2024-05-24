import { Helmet } from 'react-helmet-async'; 
import Cover from '../Shared/Cover/Cover';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';


import menuImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"


const Menu = () => {
    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')


    return (
        <div>
            <Helmet>
                <title>BistruBoss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"our menu"}></Cover>
            <SectionTitle subHeading={"Don't Miss"} heading={"today's offer"}></SectionTitle>

            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory items={dessert} title={"desert"} img={dessertImg}></MenuCategory>

            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
          
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
          
        </div>
    );
};

export default Menu;


// react-parallax -----------------------------------
// npm i react-parallax
// import { Parallax } from 'react-parallax';

{/* <Parallax
blur={{ min: -50, max: 50 }}
bgImage={img}
bgImageAlt="the dog"
strength={-200}
>
<div className="hero  h-[700px]" >
    add here your component all content
</div>
</Parallax> */}