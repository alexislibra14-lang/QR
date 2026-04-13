document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnDiscover');
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const screen3 = document.getElementById('screen3');
    const thread = document.getElementById('redThread');

    btn.addEventListener('click', () => {
        // 1. Ocultar pantalla 1 y mostrar animación
        screen1.classList.add('hidden');
        screen2.classList.remove('hidden');

        // 2. Iniciar animación del hilo rojo
        setTimeout(() => {
            // Calculamos el ancho para que conecte con el otro círculo
            thread.style.width = 'calc(100% - 200px)';
        }, 300);

        // 3. Pasar a la pantalla final después de que termine la animación
        setTimeout(() => {
            screen2.classList.add('hidden');
            screen3.classList.remove('hidden');
        }, 3000); // 3 segundos de espera total
    });
});