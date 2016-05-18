var $label = $('.label');
var $tag = $('#tag-box li');
var $editInpu = $('#edit-label');
var $tagChose = $('#tag-box ul');
var $addTagBtn = $('.add-tag');
var $deleteBtn = $('.delete-label');
var a = $('#look-all-label');
var hasOpen = false;
if($('#tag label').length >= 4){
  a.show();
  a.on('click',function(){
    if(!hasOpen){
      $('#all_label').slideDown().fadeIn();
      a.find('a').html('已显示全部标签').addClass('doing');
    } else{
      $('#all_label').slideUp().fadeOut();
      a.find('a').html('查看全部标签').removeClass('doing');
    }
    hasOpen = !hasOpen;
  });
}

$editInpu.on('focus',function(){
  $tagChose.show();
});
$tag.on('click',function(){
  $editInpu.val($(this).text());
  $tagChose.hide();
});
$addTagBtn.on('click',function(){
  if($editInpu.val() == ''){
    alert('请输入正确得标签');
  }else if(!$('#tag').is(':has(label)')){
    inter();
  } else{
    $('#tag label').each(function(index){
      if($(this).text() == $editInpu .val()){
        alert('已有重复标签,请重新添加!');
        return false;
      }
      if(index == $('#tag label').length - 1 ){
        inter();
      }
    });
  }
  $tagChose.hide();
});

function inter(){
  if ($('#tag label').length < 4) {
    $('#head_label').append('<div class="label"><label class="pure-label pure-l-margin-10 pure-tip-label">' + $editInpu.val() + '</label><div class="delete-label" style="display: none;"></div></div>');
  } else {
    $('#all_label').fadeIn();
    a.find('a').html('已显示全部标签').addClass('doing');
    $('#all_label').append('<div class="label"><label class="pure-label pure-l-margin-10 pure-tip-label">' + $editInpu.val() + '</label><div class="delete-label" style="display: none;"></div></div>');
  }
  $editInpu.val('');
  events($('.label'));

}

function events(obj){
  obj.on('mouseover', function () {
    $(this).find('.delete-label').show();
  });
  obj.on('mouseout', function () {
    $(this).find('.delete-label').hide();
  })
  obj.on('click', function () {
    $editInpu.val($(this).text());
  });
  obj.find('.delete-label').on('click', function () {
    $(this).parent().remove();
  });
}
events($('.label'));

$('body').on('keydown',function(event){
  if(event.keyCode == 13){
    $addTagBtn.trigger('click');
  }
});