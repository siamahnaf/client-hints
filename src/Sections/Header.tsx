import { Icon } from "@iconify/react";
import { headers } from "next/headers";

//Components
import Toggler from "@/Components/Header/Toggler";

//Icons
import { IconData } from "@/Components/Icons";

//UI
import { Container } from "@/Components/UI";

const Header = () => {
    const headersHDS = headers();
    return (
        <header>
            <Container>
                {JSON.stringify(headersHDS.get("Sec-CH-Prefers-Color-Scheme"))}

                <div className="bg-white">
                    <button>
                        <Icon ssr icon={IconData.RiMenu2Line} />
                    </button>
                    <Toggler />
                </div>
            </Container>
        </header>
    );
};

export default Header;