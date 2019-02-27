/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('info', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cate_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		title: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		summary: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		tags: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		logo: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		imglist: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		createtime: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'info',
		freezeTableName: true,
		timestamps: false
	});
};
