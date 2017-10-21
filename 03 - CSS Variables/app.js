document.addEventListener('DOMContentLoaded', function() {

    const inputs = document.querySelectorAll('.controls input');

    function changeProperty(e) {
        const suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', changeProperty));
    inputs.forEach(input => input.addEventListener('mousemove', changeProperty));

});