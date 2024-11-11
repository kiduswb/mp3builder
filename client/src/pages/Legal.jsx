// Legal.jsx

import TOS from "../components/TermsofUse"
import PrivacyPolicy from "../components/PrivacyPolicy"
import Footer from "../components/Footer"

function Legal({page})
{
    return (
        <>
            {page === 'terms' ? <TOS /> : <PrivacyPolicy />}
            <Footer />
        </>
    )
}

export default Legal