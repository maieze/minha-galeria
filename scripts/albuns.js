

    // Seleciona elementos
const fileInput = document.getElementById("fileInput");
const fotografiasSection = document.querySelector(".fotografias");
const infoDiv = document.getElementById("ifo");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

// Evento de mudança no input file
fileInput.addEventListener("change", function () {
    const files = fileInput.files;

    if (files.length > 0) {
        // Esconde a mensagem "Nenhuma Fotografia Disponivel"
        infoDiv.style.display = "none";

        // Percorre os arquivos selecionados, ajuda de Chat
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = function (e) {
                // Cria elemento img
                const img = document.createElement("img");
                img.src = e.target.result;
                img.alt = "Fotografia adicionada";
                img.style.width = "250px";
                img.style.height = "200px";
                img.style.margin = "10px";
                img.style.borderRadius = "8px";
                img.style.boxShadow = "2px 2px 6px rgba(0,0,0,0.5)";

                // Adiciona na section
                fotografiasSection.appendChild(img);
                // ATIVA O CLIQUE PARA ABRIR O MODAL
                enableImageClick(img);

            };

            reader.readAsDataURL(file);
        }
    }
});


// Função para ativar clique em cada imagem
function enableImageClick(img) {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
}

// Fechar modal ao clicar no X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fechar modal ao clicar fora da imagem
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

