get '/' do
  erb :index
end



post '/rolls' do
  value = params[:value] ? params[:value].to_i : nil
  @roll = value ? Roll.create({ value: value }) : Roll.create
  erb :_die_img
end
