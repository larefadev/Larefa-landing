import { Header } from "@/Components/Header/Header";
import {OurPromise} from "@/Components/OurPromise/OurPromise";
import {Catalogue} from "@/Components/Catalogue/Catalogue";
import {About} from "@/Components/About/About";
import {Partner} from "@/Components/Partner/Partner";
import {Form} from "@/Components/Form/Form";
import { OurStores } from "@/Components/Stores/OurStores";

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
        </div>
    )
}