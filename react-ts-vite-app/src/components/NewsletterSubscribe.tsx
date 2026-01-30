
function NewsletterSubscribe() {
  return (
    <div className="p-10">        
        <form action="">
            <div className="flex flex-col items-center border-2 p-5 rounded-4xl bg-[var(--color-brand)] text-white">
                <p className="text-2xl p-10">Restez connectés</p>
                <div className="w-full max-w-md flex flex-col items-center">
                    <input type="email" placeholder="Votre email" className="p-2 w-80 rounded-2xl border-2 my-5"/>
                    <button type="submit" className="bg-gradient-to-b from-[#e5a50a] to-[#c64600] p-2 w-80  rounded-2xl )]">S'inscrire</button>
                </div>
            </div>
        </form>
        </div>
  )
}

export default NewsletterSubscribe