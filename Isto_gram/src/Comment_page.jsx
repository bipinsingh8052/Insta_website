import {useEffect, useRef,useState} from 'react'
import './Comment.css'
import Post from './Post'

function Comment_page() {
      let [dots,setdots]=useState(<i className="fa-solid fa-ellipsis"></i>)
       let [option,setoption]=useState(false)
      let [change_page_post,set_change_page_post]=useState(false)
      let [comment,setcomment]=useState('View all comments');
      let [c_input,setc_input]=useState({
        comments:""
      })
       let [p,setp]=useState(false);
       let [m,setm]=useState(false)
       let [s,sets]=useState(false)
       let like_counter =useRef("");




       function input_comment(e){
        // e.preventDefault();
        let {name,value}=e.target;
        console.log(name,value)
        setc_input({
            ...c_input,
            [name]:value
        })
        console.log(c_input.comments)
       }
       function viewComment(){
        setcomment(
            // <div className="comment_section">
            //     <div className="main_section">
                    
            //             <button><i className="fa-solid fa-xmark"></i></button>
    
            //          <div className='all_killer'>
            //                 <div className="image">
            //                     <img src="./full.jpg" alt="" />
            //                  </div>
            //             <div className="comment_info">
            //                 <div className="first">
            //                     <div className="user_info">
            //                                 <img src="./full.jpg" alt="" />
            //                                 <div className="username">
            //                                     <p>vicky_baba_98</p>
            //                                     <span>Naini</span>
            //                                 </div>
            //                     </div>
            //                             {/* {(dot_true)?{setdots}:{dots}} */}
            //                     <div onClick={changeIt}>
    
            //                                 {dots}
            //                     </div>
            //                 </div>
            //                 <div className="messaging">
                             
            //                 </div>
            //                 <div className="post_footer">
            //                     <div className="like">
            //                         <div className="message">
            //                             <div onClick={likeit}>
            //                                 {(p)?<i  className="fa-solid fa-heart liked"></i>:<i className="fa-regular fa-heart"></i>}
            //                             </div>
            //                             <div onClick={message}>
            //                                 {(m)?<i className="fa-solid fa-message messaged"></i>: <i className="fa-regular fa-message"></i>}
            //                             </div>
            //                         </div>
            //                     <div onClick={save}>
            //                             {(s)?<i className="fa-solid fa-bookmark saved"></i>:  <i className="fa-regular fa-bookmark"></i>}
            //                         </div>
    
            //                     </div>
            //                     <p ref={like_counter}>33 <span>likes</span></p>
            //                     <h5 onClick={viewComment}>{comment}</h5>
            //                     <div className="input">
            //                         <form >
            //                             <i className="fa-regular fa-face-smile"></i>
            //                             <input type="text" name='comment' value={c_input.comments}  onChange={input_comment} placeholder='Add a comment...' />
            //                         </form>
            //                         <button type='submit'>Post</button>
            //                     </div>
            //                 </div>
    
            //             </div>
            //         </div>
            //      </div>
                    
            // </div>
            
    
            )
       }
       function save(){
        sets(!s);
       }
       function message(){
        setm(!m)
       }
       function likeit(){
        
        setp(!p)
        if(p){
            like_counter.current.innerHTML='33 <span>likes</span>';
            console.log(like_counter);
        }
        else{
            like_counter.current.innerHTML='34 <span>likes</span>';
            console.log(like_counter);
        }
    }
        function closeit(){
            setdots(<i className="fa-solid fa-ellipsis"></i>)
            console.log(dots);
        }
        
        function changeIt(){
            setoption(!option)
            if(option){
                setdots(
                    <div className="in" onClick={closeit}>
                        <div className="box">
                            <p><span>Report</span></p>
                            <p><span>Unfollow</span></p>
                            <p>Add to favourites</p>
                            <p>Go to post</p>
                            <p>About this account</p>
                            <p onClick={closeit}>Cancel</p>
                           
                        </div>
                    </div>
                )
            }
            else{
                setdots(<i className="fa-solid fa-ellipsis"></i>)
            }
             
            
        }

        function close_back(e){
            set_change_page_post(true)

        }
        if(change_page_post){
            return<Post/>
        }
        function submit_comment(e){
            e.preventDefault();

            console.log(c_input.comments)
        }
        // useEffect(()=>{
        //     console.log("useeffercct")
        // },[])
  return (
    <>
      <div className="comment_section">
            <div className="main_section">
                
                    <button onClick={close_back}><i className="fa-solid fa-xmark"></i></button>

                 <div className='all_killer'>
                        <div className="image">
                            <img src="./full.jpg" alt="" />
                         </div>
                    <div className="comment_info">
                        <div className="first">
                            <div className="user_info">
                                        <img src="./full.jpg" alt="" />
                                        <div className="username">
                                            <p>vicky_baba_98</p>
                                            <span>Naini</span>
                                        </div>
                            </div>
                                    {/* {(dot_true)?{setdots}:{dots}} */}
                            <div onClick={changeIt}>

                                        {dots}
                            </div>
                        </div>
                        <div className="messaging">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor facere, labore corrupti soluta minus sequi minima dolorem necessitatibus quod placeat tempore, eaque tenetur inventore excepturi est, earum voluptatibus amet?
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis dicta similique nesciunt odit odio ratione eveniet quas, facere praesentium rem necessitatibus vel accusamus enim corrupti fuga aliquam vero? Aperiam?
                         Sapiente praesentium qui facilis, ratione laudantium eveniet tempore quisquam eos distinctio voluptatibus dolores dicta aspernatur delectus amet est repudiandae eius sunt molestias iusto pariatur veniam aliquam sed! Laudantium, odit voluptates!
                         Iste soluta laudantium itaque facere dolorum odio nesciunt eos mollitia labore deleniti temporibus pariatur et officiis modi illum rem suscipit voluptatem eveniet, cum voluptas quod, doloremque dolor maxime nihil? Distinctio!
                         Ab voluptatum quam sapiente! Vitae nobis alias officiis eligendi quam ipsum sunt quasi asperiores possimus, harum beatae impedit, minus ab eveniet nisi. Eum placeat omnis sint minus amet culpa adipisci!
                         Itaque debitis culpa assumenda nam nisi ea impedit quis! Molestiae earum omnis tempora enim ea quasi adipisci incidunt quod expedita voluptatem, vel, ducimus voluptas. Pariatur dicta deleniti quod sequi harum.
                         Quos corrupti molestiae eligendi deserunt perferendis perspiciatis eius dolor labore laborum, odio nemo id incidunt eveniet, maxime delectus amet aut saepe quas ad beatae! Ullam omnis sunt laboriosam architecto tempore?
                         Atque ratione perferendis odit beatae voluptatum explicabo dolorem a. Quis consequatur autem odio veritatis? Adipisci quod itaque aspernatur provident, et necessitatibus eveniet quae eaque illo possimus odit odio nisi a?
                         Quia officiis consequatur ad omnis quibusdam quis animi! Eos quisquam, dolorum, velit ipsam excepturi praesentium adipisci sunt qui, accusamus molestiae esse perferendis dolorem odio atque soluta placeat. Libero, exercitationem ea!
                         Alias adipisci voluptatum odio recusandae dolor accusamus, labore perspiciatis atque debitis esse et provident velit voluptatem at doloribus. Tempore, consectetur. Commodi, totam ratione aut aperiam sunt animi cupiditate velit distinctio.
                         Quasi, aliquid doloribus repellendus minima illo animi libero sint eos quibusdam dolores quidem consectetur nihil porro corporis quos necessitatibus facere quo vero, impedit, quaerat molestiae est a perferendis omnis. Aut.
                         Modi veniam iure molestiae, enim ipsam veritatis facilis, neque id reiciendis ex labore beatae omnis provident ab, praesentium hic dolor blanditiis recusandae sunt quaerat nam? Itaque et placeat neque? Alias!
                         Blanditiis quia molestiae, laudantium assumenda in eum neque fuga, beatae pariatur cumque aut molestias doloribus consequuntur porro soluta illo optio, animi sunt deleniti. Quisquam adipisci nulla tenetur fugiat sint placeat!
                         Suscipit ratione tenetur quam tempora modi nisi fuga facere, exercitationem asperiores consequatur voluptatibus et nulla quia, tempore, voluptas veniam. Tempora incidunt excepturi nemo tempore et nihil perspiciatis, quis at quas.
                         Dolor saepe est itaque porro sapiente possimus? Quis quidem pariatur perspiciatis molestias saepe cumque recusandae sapiente! Nesciunt rerum quibusdam perspiciatis veniam, atque maiores, quod aliquam non aperiam velit, fugit at!
                         Doloremque vero, facilis praesentium unde excepturi quos, quod, ratione dolorum in adipisci enim est animi delectus alias. Maiores sunt qui saepe non debitis ut! Nam ex et debitis quod nobis.
                         Totam laudantium dolor maxime eaque ut porro voluptas amet culpa ducimus cum at officia sed nisi sequi, quasi placeat, sunt natus quis. Aliquam, fugit dolor? Id odio suscipit quidem ea!
                         Porro ipsum reiciendis magnam obcaecati accusamus totam alias, veniam illo doloremque quaerat nobis nisi dolore delectus aut. Minus optio iste quisquam. Corrupti impedit modi rem sed ab sit aliquam molestias.
                         Corporis sapiente quos, iure officiis aperiam repellat deserunt excepturi assumenda adipisci. Earum rem officiis reprehenderit porro sunt hic alias at nihil eos, labore aperiam! Adipisci optio nemo quisquam error distinctio?
                         Enim officia repellat nostrum necessitatibus? Porro mollitia sunt magnam id placeat quod, iure veritatis quia incidunt aliquam quaerat amet! Voluptates distinctio voluptatum odit obcaecati debitis modi error excepturi autem omnis.
                         Facilis nulla ea aut culpa quisquam sunt quidem sint vel, veritatis id velit quas cum maiores quasi earum mollitia hic veniam vero eum corrupti illo esse sit molestias? Impedit, alias.
                         Dolore dolor, nisi praesentium molestiae natus eos! Voluptatibus, asperiores aut cum commodi illum unde, quas praesentium cumque nobis totam tenetur, dignissimos atque vitae. Vel libero, distinctio asperiores totam ipsam labore!
                         Amet nostrum deserunt est eaque quaerat porro officiis praesentium neque sunt, ipsam esse obcaecati accusamus necessitatibus natus, culpa nobis ut modi id delectus veniam explicabo? Minus assumenda ad distinctio et?
                         Nesciunt ullam placeat minima perferendis? Accusantium cum ex, et expedita tenetur molestiae impedit nostrum corporis labore numquam hic, modi in molestias rem quos laboriosam. Esse commodi qui quaerat eveniet accusamus?
                         Molestiae corrupti impedit nihil laborum aperiam sunt minima, distinctio aspernatur dolorum labore, voluptatibus deserunt expedita corporis quis commodi maxime dicta et nobis aliquid magnam doloremque aut temporibus. Eum, corporis expedita.
                         Dicta quia placeat alias libero error vero. Temporibus adipisci quod quisquam harum! Excepturi dolorum earum, repellat a praesentium vero et. Obcaecati praesentium eum nam totam ut amet dolorem, veritatis sed.
                         Dicta veniam nihil quidem officia illum vero beatae magni, deserunt officiis exercitationem et tempora, unde sit, quas debitis vel iste ab! Molestiae voluptatum sapiente quibusdam soluta aut. Expedita, quisquam voluptate?
                         Cum, dignissimos. Iste reiciendis nobis at natus, optio facere impedit eligendi reprehenderit cumque doloremque dolorem. Corporis explicabo, ullam officia sapiente cupiditate ut asperiores. Ab sed asperiores, error iste vero eos!
                         Officia nesciunt aliquam quos officiis veniam fugit? Unde facilis nobis laboriosam maxime in dolorum, quisquam reprehenderit eos saepe vitae! Quasi enim, autem a necessitatibus sequi sit voluptatem natus quia deleniti?
                         Rem veritatis nemo minus animi sint voluptatibus ea blanditiis unde quasi hic magnam, nisi natus praesentium dolorum explicabo quas quibusdam porro voluptatem corrupti illo accusamus architecto perspiciatis? Eligendi, ipsa optio.
                         Commodi doloremque assumenda cupiditate, aut cum tenetur beatae officiis. Maxime consectetur dignissimos beatae perferendis, impedit quos delectus modi maiores fugit amet asperiores similique in recusandae culpa alias a exercitationem officiis!
                         Deleniti accusantium molestiae molestias dolore expedita fugit exercitationem quis dignissimos ad amet velit sit quos praesentium quaerat provident illo architecto nihil, similique autem pariatur tempore maxime tenetur? Ut, aspernatur nemo?
                         Ullam illum ratione aliquam, reprehenderit, alias veritatis sapiente, asperiores molestiae voluptates ea ipsa. Consequuntur suscipit nostrum corporis in reprehenderit iste ad harum quia libero facilis, rerum, ipsa animi reiciendis neque?
                         Architecto ea fugiat accusamus voluptatem quos doloribus dolorem nostrum quibusdam ad laudantium nesciunt rerum tempore soluta, hic provident necessitatibus qui? Beatae quo dolor dolorem suscipit error aperiam reiciendis, aliquam distinctio!
                         Molestias itaque deleniti impedit perferendis magni aliquid soluta voluptatibus blanditiis maxime rerum eius, amet quas natus provident distinctio veniam vel. Consequuntur nesciunt odio dicta magni exercitationem? Ab quae libero rem.
                         Dignissimos unde excepturi ipsum. Reiciendis beatae incidunt perspiciatis, fuga reprehenderit commodi quos quisquam, sapiente velit corrupti at ea repellendus adipisci explicabo tempora a saepe totam sint esse culpa inventore vitae!
                         Placeat dolorum dolor corrupti nihil sit suscipit vero ad commodi ex, hic a autem enim pariatur magni. Molestiae iste hic veritatis architecto culpa dolore, ducimus cum, molestias distinctio voluptate quis?
                         Ab eaque repellendus ratione eum, ut dolor ullam, tempora odio, doloribus ducimus aut at sit nobis. Placeat ut blanditiis doloremque id libero aspernatur, facilis perspiciatis harum debitis! Sapiente, temporibus nostrum!
                         Consectetur ullam inventore rerum a, eius ea ducimus nam quae quam, soluta, minus ipsam doloribus exercitationem ipsa tempore. Obcaecati ipsam rem quasi voluptatum autem possimus accusantium delectus nisi fugit iusto?
                         Reprehenderit, nisi deleniti. Eaque ad officiis, facere distinctio eius dolore libero cum minima iure culpa nulla mollitia quibusdam quasi. Ducimus ipsa labore, repudiandae dolorem voluptatem velit architecto facere itaque dicta?
                         Ut assumenda ipsum enim, voluptas placeat repellendus! Distinctio culpa ipsum doloribus eligendi. Ducimus modi nemo sequi earum incidunt harum facilis, eos recusandae reiciendis, exercitationem consequatur provident esse natus iure eveniet.
                         Magnam, omnis laboriosam accusamus adipisci facere est nobis distinctio harum amet. Voluptatibus quisquam vero nam numquam voluptatem praesentium rerum perferendis tempora, ratione nesciunt placeat ipsum, suscipit cum nihil. Illo, culpa?
                         Voluptatibus at dolorum laborum iure eos eius perferendis et, repellendus minima nisi voluptatum, nulla enim corrupti, odio fuga? Harum perspiciatis accusamus deserunt animi ullam assumenda sint autem tempora laudantium quia.
                         A, optio. Corrupti veniam aliquid, commodi debitis ullam, laborum reiciendis quos consectetur beatae maxime dolorem. Molestias aliquam, eum mollitia impedit iure tempore ad quas ex assumenda nesciunt exercitationem ab iste.
                         Blanditiis molestias modi aspernatur, sequi cum autem dolore amet obcaecati incidunt placeat nam quaerat alias sunt similique, omnis facere maiores voluptatem odit unde! Ex delectus soluta possimus nesciunt placeat excepturi.
                         Laborum, repellendus fuga! Tempore esse temporibus dolorem sed alias! Reiciendis magni fuga perspiciatis porro doloribus incidunt tempora ut error nobis maxime at, alias expedita. Consectetur obcaecati neque repellat est. Ab.
                         Dolores, iure quas culpa eligendi quia sunt nobis animi tempora ipsa ipsum esse facere totam sapiente alias aliquam fugit fuga voluptate aspernatur dolore. Eaque natus deleniti illum dolores, accusantium ipsum?
                         Dolorem sapiente tempora nesciunt, labore hic cumque modi earum, eius, consequuntur molestias itaque inventore veritatis. Quae iusto velit ut quia reiciendis soluta alias nulla, culpa, nesciunt sunt dolorem magnam distinctio.
                         Deleniti laudantium in sit, sequi soluta consectetur, eum, nam porro hic culpa provident! Est possimus, praesentium cumque beatae repudiandae, dolore, adipisci distinctio molestias qui aliquam expedita placeat. Dicta, eveniet natus.
                         Fuga accusantium quibusdam eos magni officiis, soluta sit in. Ipsam nulla suscipit exercitationem recusandae assumenda qui sunt impedit adipisci placeat tempore at, cupiditate excepturi, quas nesciunt? Sapiente quibusdam incidunt voluptatibus.
                         Libero tempore aliquid adipisci eveniet esse odio ipsum illum repudiandae reprehenderit suscipit mollitia harum fuga tempora, facilis beatae ut? Dicta et tenetur dolore voluptatum perferendis veritatis sunt fuga itaque quia?
                         Officia vel ipsam nesciunt nihil, aperiam neque vero consequuntur accusamus in impedit quia doloribus et. Deserunt eum amet maiores, pariatur nulla perspiciatis eos nemo commodi cum quos quasi, distinctio cumque!
                         Quis inventore perferendis quas pariatur nobis libero velit architecto, voluptates alias eligendi soluta eveniet id est nostrum nulla quam illo. Molestias dolor laudantium impedit modi ex laborum vel nam sequi.
                         Iste quibusdam maxime inventore, animi dolore voluptate, omnis perspiciatis velit vel quam nam consequatur obcaecati similique accusantium ullam! Animi rerum autem blanditiis sed dignissimos quo molestias suscipit laborum iusto numquam.
                         Aspernatur exercitationem minus laudantium ea a illum ex, ad sit soluta corrupti dolores. Hic dolorem quia officia maiores labore eligendi vero modi asperiores, repudiandae a, fugit eaque quis, dolor nobis?
                         Error cumque sequi facilis a alias corrupti accusantium dolores voluptatum! Officiis minima magni, sed non perspiciatis, officia autem praesentium id earum tempora ipsam, incidunt cum quasi! Dicta error quia a?
                         Assumenda veniam facilis incidunt, similique pariatur maxime magni odio quidem possimus tenetur eligendi. Aut quo, quod a eligendi repellendus esse corrupti odio eaque quibusdam ex neque porro possimus tempora facere!
                         Eius ab accusantium, doloremque enim porro dignissimos obcaecati delectus incidunt iusto blanditiis laudantium id inventore maiores aperiam libero? Dolore necessitatibus voluptatum aperiam quo unde et, quidem est! Molestiae, perferendis id?
                         Nobis corporis iste obcaecati, quam ipsa soluta eos, quod necessitatibus non atque fugiat minima. Quisquam fuga laudantium ea ipsum natus est, maxime, eveniet saepe repudiandae, dicta maiores dignissimos molestiae laboriosam.
                         Recusandae aspernatur accusantium dolorem deserunt, explicabo ipsa facere dignissimos dolorum enim ea qui, est optio praesentium blanditiis cupiditate dolore deleniti! Doloremque aliquid atque dolor sit dolorum porro fuga odio quibusdam.
                         Velit, eaque. Tenetur incidunt id rerum cupiditate quod, nam perspiciatis repudiandae soluta rem repellat. Vel iste fugit non corrupti voluptates repellendus aut architecto dignissimos ipsa soluta. In fugiat omnis pariatur!
                         Quibusdam, numquam! Saepe ratione ad amet corporis numquam voluptates magnam iste accusamus quasi quod perferendis distinctio eligendi natus, corrupti, debitis ipsa enim nobis quis incidunt quisquam? Quia iure dolore autem!
                         Rerum qui distinctio laboriosam dolores est perspiciatis quasi provident hic molestiae. Consectetur totam quia dolorum similique molestias est placeat illum dolore rerum ad, minima perferendis nulla vel possimus a ex.
                         Delectus veritatis, earum aliquid illum magnam tempora id officia beatae dolores inventore magni exercitationem excepturi eaque. Molestiae unde ipsa a nisi laudantium praesentium enim possimus, voluptatibus eos! Similique, ad ex.
                         Aut minus unde, dicta, ex facilis molestiae blanditiis soluta voluptatibus, vero animi quidem veritatis! Dolor ipsa laborum ex, voluptatum reprehenderit voluptates hic ducimus recusandae dignissimos incidunt aperiam reiciendis enim odit?
                         Tempore minima necessitatibus quas cumque repudiandae asperiores illo? Voluptate consectetur recusandae provident doloremque magnam. Deleniti quasi consectetur, quis officiis vel iste velit suscipit reprehenderit perspiciatis repudiandae ipsum laudantium voluptatem ipsam.
                         At dignissimos perferendis consectetur provident rem, ut, numquam mollitia quae quia corrupti commodi earum, libero perspiciatis consequatur vitae debitis ipsam saepe minima expedita eveniet ex? Laudantium dolorem culpa ut atque.
                         Nostrum debitis maiores voluptas? Earum dignissimos vitae quidem. Aut ex laborum voluptate officia. Ducimus amet illum magni consequatur laboriosam eligendi fuga, quia autem unde, enim ea ratione aperiam natus iste.
                         Odio enim sunt nemo architecto nesciunt harum ipsam laboriosam quod recusandae beatae obcaecati eaque perspiciatis saepe, dolorum hic ea provident maxime nihil? Corrupti nesciunt voluptatibus placeat repellendus, fugiat aliquid natus?
                         Vero, consequatur adipisci. Tempore error, veniam architecto praesentium vero molestias! Tenetur non pariatur vitae in ab, unde perspiciatis, libero architecto delectus numquam ipsum soluta inventore dolores, facere optio facilis blanditiis!
                         Omnis ab ea quidem sequi fugiat repudiandae, non illum culpa recusandae dignissimos obcaecati maxime dolorum nihil consequuntur fugit aliquid consequatur repellat! Rerum, nesciunt repellat similique sit culpa minus repellendus nobis.
                         Porro enim tenetur sunt, eligendi, perferendis quis consequatur maxime, iure aperiam aliquam vero incidunt voluptatibus nulla recusandae quibusdam in libero alias facere eos vitae nam. Cum nobis corporis perferendis est!
                         Voluptas dignissimos beatae suscipit, quo perspiciatis voluptate veniam consectetur asperiores maiores et unde rerum enim, exercitationem dolore nobis consequatur culpa repudiandae iste minus? Magnam ipsa amet quas, rem perferendis vero?
                         Obcaecati, quo deleniti hic aliquid laudantium eaque debitis blanditiis vel, ea alias veniam illum temporibus, omnis quibusdam tenetur? Fugiat explicabo pariatur laboriosam eius suscipit quibusdam animi earum unde molestias illum!
                         Maiores ipsa facere doloremque cumque dolorum minus amet fugit, quam mollitia odio eligendi nostrum expedita adipisci impedit asperiores reprehenderit aspernatur blanditiis quia est iure nam, error sapiente. Incidunt, possimus numquam!
                         Voluptates vero qui exercitationem eligendi ipsum distinctio molestias reiciendis itaque provident! Temporibus expedita ratione odit tempore sunt eius ipsam repellendus doloremque voluptatibus eaque, tempora saepe id nam reiciendis obcaecati hic?
                         Vitae aspernatur magnam voluptate nostrum earum rerum soluta beatae iusto sint nihil dicta facilis libero, esse, fugit et debitis quibusdam laboriosam recusandae dignissimos ducimus est ex. Placeat aliquid inventore harum.
                         Dicta tenetur commodi quisquam expedita incidunt, eveniet excepturi temporibus fugiat autem provident. Dignissimos, cumque quisquam tempore explicabo ut in repudiandae quibusdam modi laborum eveniet ea corrupti, a ullam hic! Excepturi!
                         Reprehenderit, consequatur ut quam quidem sunt nobis labore necessitatibus quisquam voluptatum quo fugiat at corrupti molestiae ab provident debitis. Ex ipsam corporis incidunt sapiente minus asperiores id, harum magnam sint?
                         Voluptatem alias non distinctio eum assumenda quibusdam atque quia repellendus nulla velit nemo vitae amet in magnam, ut similique hic consequuntur eveniet ab voluptatibus consectetur delectus sint asperiores? Cumque, ullam?
                         Quisquam in atque dolorem officia illo amet autem voluptate necessitatibus, accusantium cum. Ex sed autem est neque id nisi veritatis perspiciatis pariatur placeat, repudiandae reprehenderit illo saepe error numquam quia.
                         Cumque modi libero dignissimos deserunt architecto rem, at quos adipisci, facilis molestias quo quisquam. Voluptates magnam iusto porro non in, rem, iure quisquam, voluptas incidunt fuga qui explicabo labore at.
                         Dicta laborum suscipit deleniti, totam voluptatum neque modi vitae quas explicabo incidunt harum atque tempore numquam nihil fugiat, nulla illum! Vero enim similique culpa dignissimos assumenda explicabo in dolorum mollitia.
                         Deleniti omnis dolorum est necessitatibus ab ad perspiciatis minima, repudiandae illo dolor itaque reprehenderit culpa unde quo, at natus molestias corrupti repellendus suscipit neque! Quos molestias quae optio in dicta!
                         Nulla, assumenda? Animi est vero magnam cumque quaerat harum unde aliquid maxime ex consequuntur sit quae consectetur ut cum aspernatur ipsam inventore assumenda explicabo odit, totam tempore dignissimos provident nulla?
                         Placeat vel provident recusandae nam nostrum? Obcaecati atque vero rem eveniet eum voluptatum, dolores quam labore fuga dolor a, hic dicta itaque, modi quisquam ducimus sunt ex voluptatem? Repellendus, ullam.
                         Officiis inventore, asperiores numquam harum ab veritatis nihil dolorum, optio odio voluptatibus placeat, nostrum possimus. Nostrum aliquam necessitatibus omnis beatae rem accusamus accusantium quaerat ratione ex assumenda laborum, a dolor.
                         Voluptatum, quos quae! Eum fuga ullam, nulla, voluptatibus qui libero animi facere ab ipsam, mollitia quibusdam minima amet error quaerat assumenda natus ad! Numquam sequi fugit sapiente inventore maxime dolorem.
                         Consectetur suscipit nulla eaque eum expedita sit blanditiis dolorum commodi, itaque molestias quibusdam voluptatem in exercitationem delectus laudantium fugit sed maiores consequatur neque eos aut officiis! Voluptatibus magnam provident ipsa!
                         Nulla voluptatem aut debitis blanditiis facilis modi aliquam quas cumque ratione laudantium repellendus enim assumenda odio tempore cupiditate odit dignissimos culpa illo nesciunt molestias magni totam, maiores labore? Debitis, nam.
                         Vel, accusantium magni. Suscipit dolorem error alias a. Labore veritatis iusto explicabo ab laboriosam harum, nemo facere dicta id, voluptatibus enim et, tenetur quasi ea. Vitae error soluta nesciunt quas!
                        </div>
                        <div className="post_footer">
                            <div className="like">
                                <div className="message">
                                    <div onClick={likeit}>
                                        {(p)?<i  className="fa-solid fa-heart liked"></i>:<i className="fa-regular fa-heart"></i>}
                                    </div>
                                    <div onClick={message}>
                                        {(m)?<i className="fa-solid fa-message messaged"></i>: <i className="fa-regular fa-message"></i>}
                                    </div>
                                </div>
                            <div onClick={save}>
                                    {(s)?<i className="fa-solid fa-bookmark saved"></i>:  <i className="fa-regular fa-bookmark"></i>}
                                </div>

                            </div>
                            <p ref={like_counter}>33 <span>likes</span></p>
                            <h5 onClick={viewComment}>{comment}</h5>
                            <div className="input" >
                                <form onSubmit={submit_comment} >
                                    <i className="fa-regular fa-face-smile"></i>
                                    <input type="text" name='comments' value={c_input.comments}  onChange={input_comment} placeholder='Add a comment...' />
                                    <button type='submit'>Post</button>
                                </form>
                                
                            </div>
                        </div>

                    </div>
                </div>
             </div>
                
        </div>
    </>
  )
}

export default Comment_page
