jQuery(document).ready(function(){jQuery("#filter-right-tables, #filter-left-tables").focus(function(){"Filter Tables"==jQuery(this).val()&&jQuery(this).val("")}),jQuery("#filter-right-tables, #filter-left-tables").blur(function(){""==jQuery(this).val()&&jQuery(this).val("Filter Tables")}),jQuery("#filter-right-tables").keyup(function(){var query=jQuery(this).val();""==query?jQuery("ul.list-tables-right li.right-table").removeClass("invisible"):(jQuery("ul.list-tables-right li.right-table").addClass("invisible"),jQuery('ul.list-tables-right li.right-table:contains("'+query+'")').each(function(){jQuery(this).removeClass("invisible")}))}),jQuery("#filter-left-tables").keyup(function(){var query=jQuery(this).val();""==query?jQuery("ul.list-tables-left li.left-table").removeClass("invisible"):(jQuery("ul.list-tables-left li.left-table").addClass("invisible"),jQuery('ul.list-tables-left li.left-table:contains("'+query+'")').each(function(){jQuery(this).removeClass("invisible")}))}),jQuery.fn.animateHighlight=function(highlightColor,duration){var highlightBg=highlightColor||"#FFFF9C",animateMs=duration||1500;window.console&&console.log(this);var originalBg="#F5F5F5";this.stop().css("background-color",highlightBg).css("padding","4px").css("border-radius","6px").animate({backgroundColor:originalBg},animateMs)},jQuery('input[type="checkbox"].pods-importable-table').click(function(){var checkedTable=jQuery(this).attr("name"),checkedValue=jQuery(this).val(),checked=jQuery(this).is(":checked");checked?(jQuery("#import-table-progress span").html("<strong>Selected: </strong>"+checkedValue),jQuery("#import-table-progress span").animateHighlight(),jQuery("#continue-to-field-selection").attr("disabled",!1)):(jQuery("#import-table-progress span").html("Select a Table."),jQuery("#continue-to-field-selection").attr("disabled","disabled")),jQuery('input[type="checkbox"].pods-importable-table').each(function(){jQuery(this).attr("name")!==checkedTable&&jQuery(this).attr("disabled",checked?!0:!1)})}),jQuery("button#continue-to-field-selection").click(function(){jQuery("form#pods-import-table-selection").submit()}),jQuery(".enabled-status.status-switcher").click(function(){var enabled=jQuery(this).hasClass("enabled");enabled?(jQuery(this).removeClass("enabled").addClass("disabled"),jQuery(this).closest("tr.pod-column-row").removeClass("enabled").addClass("disabled"),jQuery(this).parent("tr.pod-column-row").find("input, select").each(function(){jQuery(this).attr("disabled",!0)})):(jQuery(this).removeClass("disabled").addClass("enabled"),jQuery(this).closest("tr.pod-column-row").removeClass("disabled").addClass("enabled"),jQuery(this).parent("tr.pod-column-row").find("input, select").each(function(){jQuery(this).attr("disabled",!1)}))}),jQuery("a#pods-import-create-pod").click(function(){0==jQuery("tr.pod-column-row.enabled").length?alert("At least one column must be selected to convert."):""==jQuery('input[name="new_pod_data[pod_name]"]').val()?alert("The Pod Name field is required."):jQuery("form#pods-import-create-pod").submit()})});