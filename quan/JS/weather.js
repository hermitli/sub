var obj = JSON.parse($response.body);

obj.result.svip_given = 1;
obj.result.is_xy_vip = true;
obj.result.vip_expired_at = 4096483190;
obj.result.is_vip = true;
obj.result.xy_vip_expire = 4096483190;
obj.result.xy_svip_expire = 4096483190;
obj.result.free_trial = 9999;

obj.result.wt.vip.svip_expired_at = 4096483190;
obj.result.wt.free_trial = 9999;
obj.result.svip_expired_at = 4096483190;
obj.result.wt.vip.expired_at = 4096483190;

$done({body: JSON.stringify(obj)});
