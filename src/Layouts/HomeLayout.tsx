import { Header } from "@/Components/Header/Header";
import {OurPromise} from "@/Components/OurPromise/OurPromise";
import {Catalogue} from "@/Components/Catalogue/Catalogue";
import {About} from "@/Components/About/About";
import {Partner} from "@/Components/Partner/Partner";
import {Form} from "@/Components/Form/Form";
import { OurStores } from "@/Components/Stores/OurStores";
import {Club} from "@/Components/Club/Club";
import {Opinion} from "@/Components/Opinion/Opinion";
import {Register} from "@/Components/Register/Register";
import {Location} from "@/Components/Location/Location";
import {Footer} from "@/Components/Footer/Footer";

export const HomeLayout= ()=>{
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <OurPromise/>
            <Catalogue/>
            <About/>
            <Partner/>
            <Form/>
            <OurStores/>
            <Club/>
            <Opinion/>
            <Register/>
            <Location/>
            <Footer/>
        </div>
    )
}