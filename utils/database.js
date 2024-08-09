const Sequelize=require('sequelize')

const sequelize=new Sequelize('Collegeapp','root','Prachi@123',{
    dialect:'mysql',
    host:"localhost",
    logging:false
})

module.exports=sequelize;
