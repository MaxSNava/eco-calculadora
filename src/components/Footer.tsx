const Footer = () => {
  return (
    <>
      <footer className="mx-auto max-w-6xl flex flex-col gap-2 px-2 py-4 bg-green-100 border border-green-300 rounded-xl p-6 text-center">
        <h4 className="text-lg font-semibold text-green-800 mb-2">
          De acuerdo a las reglas internacionales ...
        </h4>
        <h4 className="text-sm font-light">
          <span className="font-bold">Nota:</span> Los cálculos son una
          estimación basada en los factores de emisión proporcionados.
        </h4>
      </footer>
    </>
  );
};

export default Footer;
