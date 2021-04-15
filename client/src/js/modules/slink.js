import './slink.scss';

$('.shortlink_hook').on('click', function (e) {
  e.preventDefault();
  let errFlag = false;
  const formData = $('#form').serializeArray().reduce((result, target) => {
    if (target.value === '' || target.value === undefined) {
      errFlag = true;
    }
    result[target.name] = target.value;
    return result;
  }, {});
  if (errFlag) {
    $('#errorModalTips').html('请输入要生成的短链的域名');
    $('#errorModal').modal('show');
    return;
  }
  const $this = $(this);
  $this.attr('disabled', true).html(`
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Loading...
  `);
  const params = {
    url: formData.protocol + formData.url
  };
  // console.log(formData, params);
  $.ajax({
    url: 'https://t.littl.cn/api/gen',
    // url: 'http://localhost:7778/api/gen',
    type: 'post',
    data: params,
    success: function (response) {
      $this.attr('disabled', false).html('生成');
      $('#gModalTips').html(response.data);
      $('#gModal').modal('show');
      // console.log(response);
    }
  });
});
