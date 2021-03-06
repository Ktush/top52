$ ->
  $("#top50_attribute_val_dict_attr_id").change ->
    attr_id = $(this).val()
    url = "/top50_attribute_dicts/#{attr_id}/top50_dictionary_elems"
    select = $("#top50_attribute_val_dict_dict_elem_id")
    select.select2("val", "")
    select.data("source", url)
    reinit_select2(select)

  reinit_select2 = (el) ->
    select = $(el)
    options = select.find("option")
    $(options[0]).select()  if options.size() is 1
    options =
      placeholder: select2_localization[window.locale]
      allowClear: true

    options.ajax =
      url: select.data("source")
      dataType: "json"
      quietMillis: 100
      data: (term, page) ->
        q: $.trim(term)
        page: page
        per: 10

      results: (data, page) ->
        more = undefined
        more = (page * 10) < data.total
        results: data.records
        more: more
    options.dropdownCssClass = "bigdrop"
    options.initSelection = (element, callback) ->
      if element.val().length > 0
        $.getJSON select.data("source") + "/" + element.val(), {}, (data) ->
          callback
            id: data.id
            text: data.text

    select.select2 options
