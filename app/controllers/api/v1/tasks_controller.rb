class Api::V1::TasksController < ApplicationController
    def index
        @tasks = Task.where(project_id: params[:project_id])
        render json: @tasks
    end

    def show
        @task = Task.find(params[:id])
        render json: @task
    end

    def update
        @task = Task.find(params[:id])
        @task.update(check_params)
        if @task.valid?
            render json: @task
        else
            render json: {erros: @task.errors.full_messages}
        end 
    end

    def create
        @task = Task.create(check_params)
        if @task.valid?
            render json: @task
        else
            render json: {errors: @task.errors.full_messages}
        end
    end

    def delete
        @task = Task.find(params[:id])
        @task.destroy
        render json: { status: 'SUCCESS', message: 'deleted the post', data: @task}
    end
    
        private
    def check_params
        params.permit(:content)
    end
end
