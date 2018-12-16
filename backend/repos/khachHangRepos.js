var db = require('../fn/mysql-db');

exports.loadAll = function() {
	var sql = `select * from khachhang`;
	return db.load(sql);
}

exports.load = function(id) {
	var sql = `select * from khachhang where ID = ${id}`;
	return db.load(sql);
}

exports.add = function(c) {
	var sql = `insert into khachhang(HoTen, DienThoai, DiaChi, GhiChu) values('${c.HoTen}','${c.DienThoai}','${c.DiaChi}','${c.GhiChu}')`;
	return db.insert(sql);
}

exports.delete = function(id) {
	var sql = `delete from khachhang where ID = ${id}`;
	return db.delete(sql);
}

exports.edit= function(c) {
	var sql = `update khachhang set HoTen = '${c.HoTen}', DienThoai = '${c.DienThoai}', DiaChi = '${c.DiaChi}', GhiChu = '${c.GhiChu}'`;
	return db.write(sql);
}