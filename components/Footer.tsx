import { memo } from 'react';

function Footer() {
  return (
    <footer className="relative border-t border-[rgba(0,255,65,0.3)] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-bold text-[#00ff41] mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href="mailto:ebenito370@gmail.com"
                className="flex items-center gap-3 text-white hover:text-[#00ff41] 
                         transition-colors duration-300 group"
              >
                <i className="fas fa-envelope text-[#00ff41] group-hover:scale-110 
                             transition-transform duration-300"></i>
                <span>ebenito370@gmail.com</span>
              </a>
              <a
                href="mailto:edben1407@gmail.com"
                className="flex items-center gap-3 text-white hover:text-[#00ff41] 
                         transition-colors duration-300 group"
              >
                <i className="fas fa-envelope text-[#00ff41] group-hover:scale-110 
                             transition-transform duration-300"></i>
                <span>edben1407@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-2xl font-bold text-[#00ff41] mb-4">Sígueme</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/edben110"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-[#00ff41] 
                         transition-colors duration-300 group"
              >
                <i className="fab fa-github text-[#00ff41] text-xl group-hover:scale-110 
                             transition-transform duration-300"></i>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/edwar-alexander-benito-basante-0a9742393/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-[#00ff41] 
                         transition-colors duration-300 group"
              >
                <i className="fab fa-linkedin text-[#00ff41] text-xl group-hover:scale-110 
                             transition-transform duration-300"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[rgba(0,255,65,0.2)] pt-8 text-center">
          <p className="text-white">
            &copy; 2025 Edben. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
