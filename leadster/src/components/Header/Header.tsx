import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <div className={`
          bg-transparent bm-2 mr-auto flex justify-center items-center p-8`}>
            <Link href="https://leadster.com.br/">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={170}
                    height={36}
                    priority
                />
            </Link>
        </div>
        
    )
}