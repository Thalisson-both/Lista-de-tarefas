$(document).ready(function() {
    let formularioVisivel = false;

    $('header button').click(function() {
        if (formularioVisivel) {
            $('form').slideUp(20, function() {
                $(this).css('display', 'none');
            });
        } else {
            $('form').slideDown(20, function() {
                $(this).css('display', 'flex');
            });
        }
        formularioVisivel = !formularioVisivel;
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const tarefaNova = $("#nova-tarefa").val();
        const novoItem = $(`<li><input type="checkbox"> ${tarefaNova}</li>`);
        $(novoItem).appendTo('ul');

        // Adiciona um evento de mudança ao checkbox
        $(novoItem).find('input[type="checkbox"]').change(function() {
            // Se o checkbox estiver marcado, aplica o estilo para cortar o texto
            if ($(this).is(':checked')) {
                $(this).parent().css('text-decoration', 'line-through');
            } else {
                // Se o checkbox estiver desmarcado, remove o estilo de cortar o texto
                $(this).parent().css('text-decoration', 'none');
            }
        });

        $(novoItem).fadeIn(1000);
        $('#nova-tarefa').val('');
    });
});
