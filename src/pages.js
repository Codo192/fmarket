import React, { useState, useEffect } from "react";
import {Link, useParams} from 'react-router-dom';

export const RegistrationForm = () => {

    const [name, setName] = useState('');
    const [LastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [UserName, setUserName] = useState('');
    const [address, setaddress]  = useState('');
  
    return(
        <>
        <h3 style={{color:"Red"}}>Become a family menber!</h3>
         
        <form align="left" >
            <table id="form-dimensions" cellspacing="2" cellpadding="2" border="1">
  
                <tr>
                    <td align="right">First Name</td>
                    <td><input type="text" name="First Name" value={name} onChange={e => setName(e.target.value)} /></td>
                    
                </tr>
                <tr>
                    <td align="right">Last Name</td>
                    <td><input type="text" name="Last Name" value={LastName} onChange={e => setLastName(e.target.value)} /></td>
                    
                </tr>
  
                <tr>
                    <td align="right">email</td>
                    <td><input type="text" name="EMail" value={email} onChange={e => setEmail(e.target.value)} /></td>
                </tr>
  
                <tr>
                    <td align="right">Password</td>
                    <td><input type="text" name="Password" value={password} onChange={e => setPassword(e.target.value)} /></td>
                </tr>
  
                <tr>
                    <td align="right">Username</td>
                    <td><input type="text" name="UserName" value={UserName} onChange={e => setUserName(e.target.value)}/></td>
                </tr>
                <tr>
                    <td align="right">Address</td>
                    <td><input type="text" name="address" value={address} onChange={e => setaddress(e.target.value)}/></td>
                </tr>
  
                <tr>
                    <td align="right">Country</td>
                    <td>
                        <select name="Country">
                            <option value="-1" selected>[choose yours]</option>
                            <option value="1">USA</option>
                           
                        </select>
                    </td>
                </tr>
  
                <tr>
                    <td align="right"></td>
                    <td><input type="submit" value="Submit" id='button'/></td>
                </tr>
  
            </table>
        </form>
        
        </>
    )
}

export const BillingForm = () => {

    const [fullname, setFullname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setEmail] = useState('');
    const [zipcode, setZipcode] = useState();
    const [cardNumber, setCardNumber] = useState();
    const [expdate, setExpdate] = useState();
  
    return(
        <>
        <h3 style={{color: "green"}}>Please Enter Your Card Information</h3>
        <form >
            <table id="form-dimensions" cellspacing="2 " cellpadding="2" border="1">

                <tr>
                    <td align="right">Name</td>
                    <td><input type="text" name="Name" value={fullname} onChange={e => setFullname(e.target.value)} /></td>
                </tr>
                <tr>
                    <td align="right">Last Name</td>
                    <td><input type="text" name="Last Name" value={lastname} onChange={e => setlastname(e.target.value)} /></td>
                </tr>
  
                <tr>
                    <td align="right">EMail</td>
                    <td><input type="text" name="EMail" value={email} onChange={e => setEmail(e.target.value)} /></td>
                </tr>
  
                <tr>
                    <td align="right">Zip Code</td>
                    <td><input type="number" name="zipcode" value={zipcode} onChange={e => setZipcode(e.target.value)} /></td>
                </tr>
  
                <tr>
                    <td align="right">Card Info</td>
                    <td><input type="number" name="billing" value={cardNumber} onChange={e => setCardNumber(e.target.value)}/></td>
                </tr>

                <tr>
                    <td align="right">Expiration Date</td>
                    <td><input type="number" name="date" value={expdate} onChange={e => setExpdate(e.target.value)}/></td>
                </tr>

                <tr>
                    <td align="right">Country</td>
                    <td>
                        <select name="Country">
                            <option value="-1" selected>[choose yours]</option>
                            <option value="1">USA</option>
                        </select>
                    </td>
                </tr>
  
                <tr>
                    <td align="right"></td>
                    <td><input type="submit" value="Submit" id='button'/></td>
                </tr>
  
            </table>
        </form>
        </>
    )
}


export function Navbar () {

    const [shouldShow, setShouldShow] = useState(false);
    
    return(
    <>
    <nav>
        <img id='logo' src="https://as2.ftcdn.net/v2/jpg/02/90/57/63/1000_F_290576358_zq35tZYxABZ84mxrdfXRRqM6q3AXx94m.jpg" />
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/product-list">Our Product</Link>
            </li>
            
            <li>
                <Link to="/contacts">Contacts</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <button id="button" onClick={() => setShouldShow(true)} target='_blank'> Sign Up</button>
            {shouldShow && (
                <div id="BackgroundForm">
                    <div id="form">
                        <RegistrationForm/>
                    </div>
                </div>)}
        </ul>
    </nav>
    </>
);
}


export function Home() {
    return(
        <>

        <div id="main">
            <h1 style={{textAlign:'center', color: '#85C1E9', paddingTop:'30px', fontFamily: 'Brush Script MT', fontSize:"90px",  }}> Codo Farm Market</h1>
            <h1 style={{textAlign:'center', color: '#7DCEA0 ', paddingTop:'40px', fontFamily: 'Courier New ', fontSize:"30px",  }}>Greener. Healthier. Natural. </h1>
            <h2 style={{textAlign:'center', color: '#0E6655', paddingTop:'180px', fontFamily: "Georgia"}}> Welcome and Thank you for shopping with us!</h2>
            <p style={{textAlign:'center', color: "black", marginLeft:'50px', fontFamily: "san-serif", fontSize:"20px"}}>Fruit and vegetables should be an important part of your daily diet. They are naturally good and contain vitamins and minerals that can help to keep you healthy. They can also help protect against some diseases.</p>    
            <img src={process.env.PUBLIC_URL+"/hours.png"} />
           
        </div>
       

        </>
    );
    
}

export function About() {
    return(
        <>
        <div id='aboutglobal'>
            <h3 style={{textAlign: "center", fontFamily:"cursive", paddingTop:"50px", color:"goldenrod"}}><u> Codo Farm Market</u></h3>
            <p style={{textAlign: "center", paddingLeft: '300px', paddingRight:'300px'}}><b>Codo Farm Market is a weekly summer/fall farmers market that has served the community at its 337 Alpine Knoll Fairport New York since 2005. Codo is a 150-acre real working, full-time family-owned fruit and vegetable farm that specializes 
            in growing high-quality fruit and vegetables with exceptional flavor. Fruits and vegetables grown on the farm are available through the Retail Farm Stand, You Pick, and CSA (Community Supported Agriculture) shares. Codo Farm offers farm fresh produce spring through fall available at the farm stand. G and S Orchards' 
            mission is to operate a diverse, self-sufficient, and profitable farm by growing and marketing the highest quality products. Berline and Ricardo strive to maintain fair and reasonable pricing as well as provide a positive and educational experience for their customers.</b> </p>
    
        <div className='aboutinfo'>
            <section id='aboutleft'>
                <h3 style={{textAlign: "center", fontFamily:"cursive", fontSize:"30", paddingTop:"50px", color:"goldenrod"}}>Team Leader</h3>
                <img src="https://image.shutterstock.com/image-photo/farmer-picking-arabica-coffee-beans-260nw-2120829872.jpg" alt=''/>
               <h4 style={{color:"blue"}}><u>Ricardo Cheron</u></h4>
                <p><b>Ricardo was born in January 1992, He is the only son of Fritz Cheron, The funder of the Codo Farm Market.
                   Ricardo started working at the farm at 13 years old age. He started to manage the farm at 26 years old. After his father 
                   pass away take over the farm and become the team leader.</b>
                </p>
            </section>

            <section id='aboutmid'>
                <h3 style={{color:"goldenrod"}}> <u>Location</u></h3>
                <p><b>Codo Farm Market was founded by Ricardo's great-great-grandfather, the farm and its popular retail stand are nestled at the busy intersection of Fairport and Perinton, used by countless metropolitan New Yorkers traveling to 
                    the northern Catskills for summer vacations and autumn leaf-peeping trips.</b> </p>
                <img src="https://images.cvent.com/ws/images/venues/8039/Shooting-Star-Horse-Farm-Greensboro-NC-a3eb4646-98b5-448e-bef6-df004ed6f927.jpg?unique=true&d=900x450&f=jpeg" alt=''/>
            </section>  
            
            <section>
                    
                    <hr style={{width: '80%', marginLeft: 'auto', marginRight: 'auto',marginTop: '30px', marginBottom: '30px' }}></hr>
                    <p><b>Please share your experience with us</b></p>
                    <img src="https://image.shutterstock.com/image-vector/facebook-icon-vector-illustration-social-260nw-2109892373.jpg" style={{height:'40px',width: '40px',margin:'10px'}}/>
                    <img src="https://thumbs.dreamstime.com/b/twitter-logo-bird-isolated-over-white-background-social-media-networking-communications-symbol-breaking-news-130861855.jpg" style={{height:'40px',width: '40px',margin:'10px'}}/>
                    <img src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-2011.png" style={{height:'40px',width: '40px',margin:'10px'}}/>
                    <ul >
                        <li><strong>337 Alpine Knoll Fairport New York</strong></li>
                        <li><strong>917 430 1708</strong></li>
                        <li><strong>codofarmmarket@gmail.com</strong></li>
                         
                         
                    </ul>
                </section>
        
           
        </div>
        </div>
    </>
    );
}

export function ListOfComm ({ comments }) {
    return(
    <>
    <h3>Please leave a comment about your experience with us</h3>
    {comments.map((comment, key) => (
        <div className="userComment" key={key}>
            <h4>{comment.userName}</h4>
            <p>{comment.text}</p>
        </div>
    ))}
    </>
);
}

export function LikeButton ({ productName, likes, setProductInfo }) {
    const likeProduct = async () => {
        const result = await fetch(`/api/products/${productName}/like`, {
            method: 'post',
        });
        const body = await result.json();
        setProductInfo(body);
    }
    return (
        <div>
            <button id ="button" onClick={() => likeProduct()}>Up Vote </button>
            <h3 style={{textAlign:"center", color: "black"}}>This packages has been vote {likes} times</h3>
        </div>
    );
}

export function UserComForm ({ productName, setProductInfo }) {
    const [userName, setUserName] = useState('');
    const [userComment, setUserComment] = useState('');

    const commentArea = async () => {
        const result = await fetch(`/api/products/${productName}/post-comment`, {
            method: 'post',
            body: JSON.stringify({ userName, text: userComment }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        setProductInfo(body);
        setUserName('');
        setUserComment('');
    }
    
    return (
        <div id="userCommentForm">
            <h3>Leave your comment</h3>
            <label>
                Name:
                <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
            </label>
            <label>
                Comment:
                <textarea rows="4" cols="50" value={userComment} onChange={(event) => setUserComment(event.target.value)} />
            </label>
            <button onClick={() => commentArea()}>Send</button>
        </div>
    );

    
}

export function ProductPage() {
    const {name} = useParams();
    const product = Articles.find(product => product.name === name)
    const [shouldShow, setShouldShow] = useState(false);
    const [productInfo, setProductInfo] = useState({ likes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result =  await fetch(`/api/products/${name}`);
            const body = await result.json();
            console.log(body);
            setProductInfo(body);
        }
        fetchData();
    }, [name]);

    if (!product) return (<h1 style={{paddingTop:"100px"}}>This Vegertable is not available </h1>);

    return(
       <>
            <div id='item-shape'>
            <h1 style={{paddingTop:"10px", textAlign:"center"}}> {name}</h1>
            <LikeButton productName={name} likes={productInfo.likes} setProductInfo={setProductInfo} />
           
            <h1 style={{paddingTop:"10px"}}> {product.price}</h1>
            <img style={{width: '30%'}} src={product.imagelink}/>
            {product.content.map((paragraph, key) => (<p key={key}>{paragraph}</p>))}
                <br/>
            <button id="button" onClick={() => setShouldShow(true)} target='_blank'> Buy Now</button>
            {shouldShow && (
                <div id="BackgroundForm">
                    <div id="form">
                        <BillingForm/>
                    </div>
                </div>)}
            </div>
            <UserComForm productName={name} setProductInfo={setProductInfo} />
            <ListOfComm comments={productInfo.comments}/>
            
       </> 
    );
}

export const Articles = [
    {
        name: 'Fruit',

        price: '$ 16.63',
        imagelink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH61Yp3oDAX94fgfNa-LEcAjsKXtzRk8TGxw&usqp=CAU',
        content: [
            `Premium Package`,
            `A diet rich in vegetables and fruits can lower blood pressure, reduce the risk of heart disease and stroke, prevent some types of cancer, 
            lower risk of eye and digestive problems, and have a positive effect upon blood sugar, which can help keep appetite in check.`,
             `Package List:`,
            `- Apple`,
            `-Bananas `,
            `- Pears`,
            `- Avocados`,
        ]
    },    {
        name: 'Leafy Green',
        price: '$ 17.53',
        imagelink: 'https://miamionthecheap.com/lotc-cms/wp-content/uploads/2014/12/Kendall-Farmers-Market-728x546.jpg.webp',
        content: [
            `Premium Package`,
            `Leafy greens contribute to a healthy heart in a number of ways. They contain potassium, which lowers high blood pressure; 
            fibre, which keeps cholesterol in check; and folate, which protects against heart disease and stroke. Their extensive range of
             antioxidants can also protect against free-radical damage, a key contributor to atherosclerosis.`,
             `Package List:`,
            `- Spinach`,
            `- Cabbage`,
            `- Watercress`,
            `- Romaine Lettuce`,
        ]
    },     {
        name: 'Roots',
        price: '$ 18.00',
        imagelink: 'https://www.homeperch.com/wp-content/uploads/2019/06/A-Close-up-of-Root-Vegetables-q1-18-6.jpg',
        content: [
            `Premium Package `,
            `Defined as an edible plant that grows underground, potatoes, carrots and onions are a few common examples that most are familiar with
            Root vegetables have long been enjoyed as a delicious part of a healthy diet.`,
            `Package List:`,
            `- Carrot`,
            `- Garlic`,
            `- Ginger`,
            `- Radish`,
  
        ]
        

    }, 
    
      {
        name: 'Seed Vegetable',
        price: '$12.50',
        imagelink: 'https://c8.alamy.com/comp/2GGXW46/macro-closeup-of-many-local-produce-green-beans-in-cardboard-paper-boxes-containers-on-retail-store-shop-shopping-display-in-local-farmers-market-at-2GGXW46.jpg',
        content: [
            `Premium Package`,
            `The legumes are full of antioxidants, including vitamin C, flavonols, quercetin, 
            and kaemferol. These antioxidants fight free radicals in the body, which helps to reduce cell
             damage and may help to lower your risk of certain health conditions. `,
             `Package List:`,
            `- Kidney beans`,
            `- Soybeans`,
            `- Navy beans`,
            `- Pinto beans`,

        ]
    },      
];

export function ProductList() {
    return(
        <>
        <div style={{}}>
            <h1 style={{fontFamily:"cursive", color:"black", textAlign: "center", paddingTop:"50px"}}>Select a category! </h1>
            {Articles.map((product, key) => (
            <Link className="article-list-item" key={key} to={`/products/${product.name}`}>
            <h3>{product.name}</h3>
            <p>{product.content[0].substring(0, 0)}</p>
            </Link>
            ))}
        </div>
        </>
    );
}

export function Contacts() {
    const [nameInput, setNameInput] = useState('');
    const [phoneInput, setPhoneInput] = useState();

    const HandleSubmit = e => {
        console.log(nameInput)
        alert('Thank you for you feedback and concern, Someone will contact you as soon as possible');
        e.preventDefault();
        
    }

    return(
    <>  
        <div className="Contactuss">
            <section id='kontacleft'>  
            <h1 style={{textAlign: "center", color:"red", fontSize:"40px", fontFamily:"cursive", paddingTop:"5px"}}>Contact Us</h1>
            <h5 style={{textAlign: "justify", color:"#0000FF", fontSize:"30"}}> We love meeting our customers here at the farm in Fairport. <br></br> Come stop 
            by our farm store during open hours to check out our fresh organic produce, local honey, beeswax candles, 
            maple syrup, etc. or get in touch with us to discuss your next event. </h5>
            </section>
            <div className='contactinfo'>
                <section id='contactcenter'>
                    <form onSubmit={HandleSubmit}>
                        <h1 style={{ color:"goldenrod"}}> Leave a Reply </h1>
                        <h3 style={{ color:"black", fontFamily:"cursive"}}>Your phone will not be published. Required fields are marked *</h3>
                        <input type="text" name="name" placeholder="Full Name* " value={nameInput} onChange={e => setNameInput(e.target.value)}/>
                        <br></br>
                        <input type="number" phone="phone" placeholder="Phone*" value={phoneInput} onChange={e => setPhoneInput(e.target.value)}/>
                        <br></br>
                        <textarea style={{name:"message", width:'350px', height:'300px'}}>Comment...</textarea>
                        <input id="button" type="submit" style={{color:'white'}}/> 
                    </form>
                   
                </section>
                <section>
                    
                    <hr style={{width: '80%', marginLeft: 'auto', marginRight: 'auto',marginTop: '30px', marginBottom: '30px' }}></hr>
                    <p>Please share your experience with us </p>
                    <img src="https://image.shutterstock.com/image-vector/facebook-icon-vector-illustration-social-260nw-2109892373.jpg" style={{height:'40px',width: '40px',margin:'10px'}}/>
                    <img src="https://thumbs.dreamstime.com/b/twitter-logo-bird-isolated-over-white-background-social-media-networking-communications-symbol-breaking-news-130861855.jpg" style={{height:'40px',width: '40px',margin:'10px'}}/>
                    <img src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-2011.png" style={{height:'40px',width: '40px',margin:'10px'}}/>
                   
                    <ul >
                        <li><strong>337 Alpine Knoll Fairport New York 14450 - Phone:917 111 0000 - email: codofarmmarket@gmail.com </strong></li>
                        
                    </ul>
                </section>

            </div>
        </div>
        
    </>
    );
    
}


export function Nopage() {
    return(
        <div>
            <h1>404: Page is not available</h1>
        </div>
    );
}
