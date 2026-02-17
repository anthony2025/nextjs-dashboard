export default function Footer() {
  return (
    <div className="bg-rose-500 color-neutral-200 text-4/2 flex w-full flex-col border-t-3 px-4 py-3 text-center sm:flex-row sm:text-left">
      <div className="flex">
        <div className="mr-10 text-center">
          <div>PHONE</div>
          <div>EMAIL</div>
          <div>ADDRESS</div>
        </div>

        <div className="mb-8 ml-12">
          <div>555-555-5555</div>
          <div>admin@test.com</div>
          <div>111 Test Rd, Fairfax, VA</div>
        </div>
      </div>

      <a href="#" className="ml-0 transition-colors hover:text-rose-500 sm:ml-16">
        Roses Day Care LLC, 2026
        <br />
        made with ♥ by Anthony Ascencio
      </a>
    </div>
  )
}

