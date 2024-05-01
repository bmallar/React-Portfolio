import Github from "../../images/github.svg";
import LinkedIn from "../../images/linked-in.svg";
import StackOverflow from "../../images/stack-overflow.svg";
function ContactsInfo(){
    return(
        <footer className="footer">
            <ul>
                <li><a href="https://github.com/bmallar"><img className="footerImgs" src={Github} /></a></li>
                <li><a href="https://www.linkedin.com/in/ben-mallar-aa08ba304/"><img className="footerImgs" src={LinkedIn} /></a></li>
                <li><a href="https://stackoverflow.com/users/24784817/ben-mallar"><img className="footerImgs" src={StackOverflow} /></a></li>
            </ul>
        </footer>
    )
}

export default ContactsInfo