import React from 'react';
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
    return (
        <div className="flex justify-center bg-yellow-400 text-black">
            <div className="container flex flex-col items-center py-4">
                <p className='text-xl'>
                    <span className="font-bold">Farmácia</span>
                    <span className="font-oswald font-semibold"> GenPharma</span>
                    <span className="font-bold"> | Copyright: {2024}</span>
                </p>
                <p className='text-lg'>Acesse nossas redes sociais</p>
                <div className='flex gap-2'>
                  <a href="https://www.linkedin.com/in/sabrina-leonel/" target='blank'><LinkedinLogo size={48} weight='bold' /></a>
                  <a href="https://www.instagram.com/sabriinaleonel/" target='blank'><InstagramLogo size={48} weight='bold' /></a>
                  <a href="https://github.com/SabrinaLeonel" target='blank'><GithubLogo size={48} weight='bold' /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
