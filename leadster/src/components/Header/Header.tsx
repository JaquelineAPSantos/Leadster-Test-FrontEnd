import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <div className={`
          bg-transparent bm-2 mr-auto flex justify-center items-center p-8 w-auto h-auto`}>
            <Link href="https://leadster.com.br/" target="_blank">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={150}
                    height={36}
                    priority
                />
            </Link>
        </div>
        
    )
}