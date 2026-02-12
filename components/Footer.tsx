export default function Footer() {
  return (
    <footer className="relative bg-black/90 border-t border-primary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href="mailto:ebenito370@gmail.com"
                className="flex items-center gap-3 text-green-200 hover:text-primary 
                         transition-colors duration-300 group"
              >
                <i className="fas fa-envelope text-primary group-hover:scale-110 
                             transition-transform duration-300"></i>
                <span>ebenito370@gmail.com</span>
              </a>
              <a
                href="mailto:edben1407@gmail.com"
                className="flex items-center gap-3 text-green-200 hover:text-primary 
                         transition-colors duration-300 group"
              >
                <i className="fas fa-envelope text-primary group-hover:scale-110 
                             transition-transform duration-300"></i>
                <span>edben1407@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Sígueme</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/edben110"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-green-200 hover:text-primary 
                         transition-colors duration-300 group"
              >
                <i className="fab fa-github text-primary text-xl group-hover:scale-110 
                             transition-transform duration-300"></i>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/edwar-alexander-benito-basante-0a9742393/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-green-200 hover:text-primary 
                         transition-colors duration-300 group"
              >
                <i className="fab fa-linkedin text-primary text-xl group-hover:scale-110 
                             transition-transform duration-300"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="text-green-200">
            &copy; 2025 Edben. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
