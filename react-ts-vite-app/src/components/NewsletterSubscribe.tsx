
function NewsletterSubscribe() {
  return (
    <div className="p-10">        
        <form action="">
            <div className="flex flex-col items-center border-2 p-5 rounded-4xl bg-[var(--color-primary)] text-white">
                <p className="text-lg p-1">Restez connectés</p>
                <div className="w-50 md:w-80">
                    <input type="email" placeholder="Votre email" className="p-2 w-[75%] rounded-2xl border-2 my-5 bg-white/25"/>
                    <button type="submit" className="bg-gradient-to-b from-[#e5a50a] to-[#c64600] p-2 w-[75%]  rounded-2xl )]">S'inscrire</button>
                </div>
            </div>
        </form>
        </div>
  )
}

export default NewsletterSubscribe