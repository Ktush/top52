(function(){$(function(){return $("#empty-fields-opener").on("click",function(){var e;return e=$(this),e.parents("table:first").find("tr.hidden").removeClass("hidden"),e.parents("tr:first").remove(),!1}),$(".raw-text-opener").on("click",function(){return $(this).prev(".raw-ticket-message, .raw-reply").show(),$(this).remove(),!1}),$("#ticket_subscribers_form, #ticket_tags_form").submit(function(){var e;return e=$(this).serialize(),$.ajax({url:$(this).attr("url"),data:e,dataType:"JSON",type:"PUT"}),!1})})}).call(this),$(document).ready(function(){$("#reply_template").on("change",function(){$("#reply_message").val($(this).val())}),$(document).on("reload_form form",function(e){var t=$(e.target);$.get(t.data("reload-url"),function(e){t.replaceWith(e)})}),$(document).on("ajax:success #new_ticket_tag",function(){$("#tags_form").trigger("reload_form")}).on("ajax:beforeSend #new_ticket_tag",function(e){$(e.target).find(":input").each(function(e,t){t.disabled=!0})}).on("ajax:complete #new_ticket_tag",function(e){$(e.target).find(":input").each(function(e,t){"submit"!=t.type&&(t.value=""),t.disabled=!1})}),$("div.toggle-box").on("click > div.toggle",function(e){var t=$(e.target).parents("div.toggle-box:first");t.find("> div.object").toggle()}),$("#reply-template-maker").on("click",function(){var e=$("#reply_message").val(),t=$("#reply-template-maker").attr("href")+"?reply_template[message]="+e;return window.open(t,"_blank"),!1})});