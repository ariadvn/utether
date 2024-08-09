import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "Tether News"



  return (
    <div style={{ direction: "ltr", minHeight: "11vh",}}>
      <br-x />
      <Window title={name} style={{ minHeight: 200, margin: 10, width: "calc(90% - 20px)" }}>

        <div style={{width:"100%", height:360 , backgroundColor:"#EBFADF" , textAlign:"center", backgroundImage:`url(${"/tet.jpg"})`,borderRadius:10}}><img src="/" alt="" />
        <br-xxxx />
          <div style={{width:"65%", height:300 , backgroundColor:"#539987" , textAlign:"left",float:"left", margin:20, borderRadius:70 , opacity: 0.9}}>
                  <br-x/>
                  <br-xxx/>
                  <p style={{margin:30, fontSize:18, color:"#E9FFF6"}}>- price :  {(props.p.price as number).toLocaleString("en-US")}</p>
              <p style={{margin:30, fontSize:18, color:"#E9FFF6"}}>- 24h price :  {(Number(props.p.diff24d) as number).toLocaleString("en-US")}</p>
              <p style={{margin:30, fontSize:18, color:"#E9FFF6"}}>- last 7 days price :  {(Number(props.p.diff7d) as number).toLocaleString("en-US")}</p>
              <p style={{margin:30, fontSize:18, color:"#E9FFF6"}}>- last 30 days price :  {(Number(props.p.diff30d) as number).toLocaleString("en-US")}</p>
          </div>
        </div>
 
      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;
    
    let res = await fetch("https://api.tetherland.com/currencies")
    let data = await res.json()
    let p = data.data.currencies.USDT

    console.log("________price________:", p)
  
  
    return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}